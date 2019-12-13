module.exports = {
  siteMetadata: {
    title: 'Go.Read - Official Blog of GoSocialApp',
    description:'Discover new GoSocial contests and challenges. Find inspiration. And learn what’s new on the GoSocial App.',
    tags:'GoSocial App, Photography, writing, contests, challenges, learn, design, photography contests, writing contests, photography challenge, writing challenge, learn creative writing, creative writing, Get GoSocial, GoSocial Contests, GoSocial Challenge'
    },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Go.Read`,
        short_name: `Go.Read`,
        start_url: `/blog`,
        background_color: `#FFFFFF`,
        theme_color: `#254BBB`,
        display: `standalone`,
        icon: `static/img/icon.png`,
        scope: "/blog"
      },
    },
    'gatsby-plugin-offline'
  ],
}
