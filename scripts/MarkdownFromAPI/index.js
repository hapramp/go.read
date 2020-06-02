const json2md = require("json2md");
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const slugify = require('slugify');
const _ = require('lodash')

slugify.extend({ '/': '-' })

json2md.converters.meta = function (meta, json2md) {

  let tagFormatted = ''
  meta.tags.map(tag => tagFormatted += `  - ${_.kebabCase(tag)}\n`)

  let metaTitle =`'${meta.title.substring(1, meta.title.length-1).replace(/'/g, '’')}'`;
  let desc = `'${meta.desc.substring(1, meta.desc.length-1).replace(/'/g, '’').replace(/:/g, '')}'`;

  return `---
templateKey: blog-post
title: ${metaTitle}
date: ${meta.created_at?meta.created_at:new Date().toISOString()}
description: ${desc}
featuredpost: false
featuredimage: null
bannerimage: ${meta.banner_url}
tags:
${tagFormatted}\n---`
}

json2md.converters.youtube = function(youtubeId, json2md) {
  return `[![Youtube Video](https://img.youtube.com/vi/${youtubeId}/0.jpg)](https://www.youtube.com/watch?v=${youtubeId})`
}

const getDeepLink = (item, slug) => {
  let blogUrl = `https://getgosocial.app/blog/${slug}`
  let pageLinkUrl = 'https://gosocial.page.link/';
  let apn  = 'com.go.social.prod';
  let st = item.content_json.title;
  let sd = item.content_json.segments[0].content;
  let si = item.banner_url;
  let utm_medium='blog';
  let utm_source='Landing Page'

  // Build Url
  const deeplinkUrl = new URL(pageLinkUrl);

  deeplinkUrl.searchParams.append('link',`${blogUrl}/?appRoute=/challenges/${item.id}`);
  deeplinkUrl.searchParams.append('apn',apn);
  deeplinkUrl.searchParams.append('st',st);
  deeplinkUrl.searchParams.append('sd',sd);
  deeplinkUrl.searchParams.append('si',si);
  deeplinkUrl.searchParams.append('utm_medium',utm_medium);
  deeplinkUrl.searchParams.append('utm_source',utm_source);

  return deeplinkUrl.href;

}


module.exports = class MarkdownFromAPI {
  constructor(config) {
    this.config = config;
  }

  getCorrectMarkdownObject(segment) {
    switch (segment.type) {
      case 'text':
        return { p: segment.content.trim() }

      case 'image':
        return { img: { title: 'Image', source: segment.url } }

      case 'youtube':
      return { youtube: segment.url }

      default:
        return { [segment.type]: segment.content.trim() }
    }
  }


  createMarkdownFile(markdownData, path) {
    fs.writeFile(path, markdownData, { flag: 'w' }, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Created File", path);
    });
  }

  getBlogSlug(blog) {
    const timeStamp = blog.created_at
    const title = blog.title
    let date =  blog.created_at?new Date(timeStamp):new Date();
    let slugPrefix = `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`
    return `${slugPrefix}-${slugify(title, { remove: /[*+~.()'"!:@/#]/g })}`;
  }


  getMarkdownData(item) {
    let segments = item.content_json.segments;

    let mdArray = [];
    let itemTags = item.tags?this.config.tags.concat(item.tags.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1))):this.config.tags;

    mdArray.push({
      meta: {
        title: `'${item.title}'`,
        created_at: item.created_at,
        desc: `'${segments[0].content}'`,
        banner_url: item.banner_url,
        tags: itemTags
      }
    })

    segments.slice(1).map(segmentItem => mdArray.push(this.getCorrectMarkdownObject(segmentItem)))

    mdArray.push({ link: { title: 'Participate on GoSocial App', source: getDeepLink(item, this.getBlogSlug(item)) } })

    return mdArray;
  }

  createChallengesMarkdownPost(item) {
    let md = json2md(this.getMarkdownData(item));
    let slug = this.getBlogSlug(item)
    this.createMarkdownFile(md, path.join(path.dirname(require.main.filename), this.config.path, `${slug}.md`));
  }

  fetchChallenges(url) {
    fetch(url)
      .then(data => data.json())
      .then(json => {
        json.results.map(item => this.createChallengesMarkdownPost(item))

        if (json.next)
          return this.fetchChallenges(json.next)
      })
      .catch(err => {
        console.log(err);
      })
  }

  init() {
    this.fetchChallenges(this.config.apiUrl);
  }
}