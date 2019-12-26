const json2md = require("json2md");
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const slugify = require('slugify');

slugify.extend({ '/': '-' })

json2md.converters.meta = function (meta, json2md) {

  let tagFormatted = ''
  meta.tags.map(tag => tagFormatted += `  - ${tag}\n`)

  return `---
templateKey: blog-post
title: ${meta.title}
date: ${meta.created_at}
description: ${meta.desc}
featuredpost: false
featuredimage: null
bannerimage: ${meta.banner_url}
tags:
${tagFormatted}\n---`
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
    let date = new Date(timeStamp);
    let slugPrefix = `${date.getFullYear()}-${("0" + date.getMonth()).slice(-2)}-${("0" + (date.getDate() + 1)).slice(-2)}`
    return `${slugPrefix}-${slugify(title, { remove: /[*+~.()'"!:@/#]/g })}`;
  }


  getMarkdownData(item) {
    let segments = item.content_json.segments;

    let mdArray = [];

    mdArray.push({
      meta: {
        title: `'${item.title}'`,
        created_at: item.created_at,
        desc: `'${segments[0].content}'`,
        banner_url: item.banner_url,
        tags: [this.config.tag].concat(item.tags.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1)))
      }
    })

    segments.slice(1).map(segmentItem => mdArray.push(this.getCorrectMarkdownObject(segmentItem)))

    mdArray.push({ link: { title: 'Participate on GoSocial App', source: 'https://play.google.com/store/apps/details?id=com.go.social.prod' } })

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