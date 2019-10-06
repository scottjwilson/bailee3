require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
})
module.exports = {
  siteMetadata: {
    title: `Bailee App`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://thebaileeapp.us18.list-manage.com/subscribe/post?u=6f7ee1c367a5b27d8391cb2c5&amp;id=d6bb89b754",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-116132710-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
