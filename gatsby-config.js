/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Antony Ndungu",
    author: "Antony Ndungu Maina"
  },
  plugins: [
    `gatsby-plugin-react-helmet`, 
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: []
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Antony Ndungu",
        short_name: "Antony",
        start_url: "/",
        background_color: "#F1F1F1",
        theme_color: "#F1F1F1",
        display: "standalone",
        icon: "src/images/favicon-16x16.png",
        crossOrigin: "use-credentials"
      }
    }
  ]
}
