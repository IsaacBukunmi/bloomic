/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [

    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    'gatsby-plugin-sharp',

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Bloomic web application',
        short_name: 'Bloomic',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#E7272D',
        display: 'standalone',
        icon: 'src/images/bloomic_icon.jpg'
      },
    },

    "gatsby-plugin-offline"
  ],
}
