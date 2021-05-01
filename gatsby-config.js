const colors = require('./src/styles/colors')
const sassVars = require(__dirname + "/src/styles/index.js")
const sass = require("node-sass")
const sassUtils = require("node-sass-utils")(sass)

module.exports = {
  siteMetadata: {
    title: 'Gerard Clos',
    author: {
      name: 'Gerard Clos',
      summary: 'software engineer, infovore, and aspirant polymath.',
    },
    description: 'Ideas to understand the world around us.',
    siteUrl: `https://gerardclos.com`,
    social: {
      twitter: `geclos`,
      github: `geclos`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/misc`,
        name: `misc`
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-109242831-2`
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  filter: { fileAbsolutePath: { regex: "/blog/" } },
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Gerard Clos - Blog",
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gerard Clos`,
        start_url: `/`,
        background_color: colors.white,
        theme_color: colors.primary.s400,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        functions: {
          "get($keys)": function(keys) {
            keys = keys.getValue().split(".");
            let result = sassVars;
            let i;
            for (i = 0; i < keys.length; i++) {
              result = result[keys[i]];
            }
            result = sassUtils.castToSass(result);
            return result;
          }
        }
      }
    },
    'gatsby-plugin-offline'
  ]
}
