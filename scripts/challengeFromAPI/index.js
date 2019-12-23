const json2md = require("json2md");
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const slugify = require('slugify');
const config = require('./config');

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
  - challenges
${tagFormatted}\n---`
}

const getCorrectMarkdownObject = (segment) => {
  switch (segment.type) {
    case 'text':
      return { p: segment.content.trim() }

    case 'image':
      return { img: { title: 'Image', source: segment.url } }

    default:
      return { [segment.type]: segment.content.trim() }
  }
}


const createMarkdownFile = (markdownData, path) => {
  fs.writeFile(path, markdownData, { flag: 'w' }, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
}

const getBlogSlug = (blog) => {
  const timeStamp = blog.created_at
  const title = blog.title
  let date = new Date(timeStamp);
  let slugPrefix = `${date.getFullYear()}-${("0" + date.getMonth()).slice(-2)}-${("0" + (date.getDate() + 1)).slice(-2)}`
  return `${slugPrefix}-${slugify(title, { remove: /[*+~.()'"!:@/]/g })}`;

}


const getMarkdownData = (item) => {
  let segments = item.content_json.segments;

  let mdArray = [];

  mdArray.push({
    meta: {
      title: `'${item.title}'`,
      created_at: item.created_at,
      desc: `'${segments[0].content}'`,
      banner_url: item.banner_url,
      tags: item.tags
    }
  })

  segments.map(segmentItem => mdArray.push(getCorrectMarkdownObject(segmentItem)))

  return mdArray
}

const createChallengesMarkdownPost = (item) => {
  let md = json2md(getMarkdownData(item));
  let slug = getBlogSlug(item)
  createMarkdownFile(md, path.join(path.dirname(require.main.filename), config.path, `${slug}.md`));
}

const fetchChallenges = (url) => {
  fetch(url)
    .then(data => data.json())
    .then(json => {
      json.results.map(item => createChallengesMarkdownPost(item))

      if (json.next)
        return fetchChallenges(json.next)
    })
    .catch(err => {
      console.log(err);
    })
}

module.exports = init = () => {
  fetchChallenges(config.apiUrl);
}