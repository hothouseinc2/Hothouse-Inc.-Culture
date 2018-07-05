module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Tailwind'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/']
      }
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify` // make sure to put last in the array
  ]
}
