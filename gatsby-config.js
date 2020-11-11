/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Bloomic',
    author: 'Bloomic Web Application'
  },
  
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',

    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: "https://app.us2.list-manage.com/subscribe/post?u=5b80f1bfdd61a18dd7fb4ce49&amp;id=3ea9b22be3" 
      }
    },

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
