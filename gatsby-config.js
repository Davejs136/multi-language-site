require('dotenv').config({
  path: 'env'
})

const query = require('./queries')

module.exports = {
  siteMetadata: {
    title: `Multi Language Site`,
    description: `A simple multi language site made with Gatsby and intl-graphql.`,
    author: `@Davejs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.API_URL,
        singleTypes: ['principal'],
        queryLimit: 1000,
      }
    },
    {
      resolve: 'gatsby-plugin-intl-graphql',
      options: {
        url: process.env.API_URL,
        path: `${__dirname}/src/lang`,
        languages: ['en', 'es'],
        defaultLanguage: 'es',
        redirect: true,
        query,
      }
    }
  ],
}
