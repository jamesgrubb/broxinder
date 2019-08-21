/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins : [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        name: `data`,
        path: `${__dirname}./src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logomarks`,
        path: `${__dirname}/src/images/`
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    
    
  ]
  /* Your site config here */
}
