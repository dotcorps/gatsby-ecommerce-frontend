module.exports = {
  siteMetadata: {
    title: `SUSAGRI  E-Commerce Demo`,
    description: `Designed, Developed and hosted by DOTCORPS.`,
    author: `@Krishna`,
  },
  plugins: [
    `gatsby-source-strapi`,
    {
    resolve: `gatsby-source-strapi`,
     options: {
      apiURL:process.env.API_URL||'http://localhost:1337',
      queryLimit: 200, // Default to 100
      contentTypes: [`product`] 
    },
  },

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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
