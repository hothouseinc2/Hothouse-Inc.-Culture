module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Tailwind',
    benefits: [
      {
        title: 'Untapped Opportunities',
        description:
          'Leveraging moments that explore undiscovered employee talents and business success.',
        imageURL: '/images/benefits/benefits-oppotunities.jpg',
        color: 'hothouse'
      },
      {
        title: 'Work - Life Balance',
        description:
          'Flexibility in the office helps employees produce better work. Whether it’s escaping for a mid-day yoga class or an afternoon walk, we encourage taking advantage of moments that refresh.',
        imageURL: '/images/benefits/benefits-work-life-balance.jpg',
        color: 'pink'
      },
      {
        title: 'Lifelong Learning',
        description:
          'Growth comes from investing in employees. Hothouse encourages the pursuit of teachable moments by attending conferences, hosting speakers and incorporating current technology trends into the work environment.',
        imageURL: '/images/benefits/benefits-life-long-learning.jpg',
        color: 'orange'
      },
      {
        title: 'Happy Together',
        description:
          'Establishing a family vibe requires creating an atmosphere built for bonding. Whether it’s Wine Down Friday, suds with the Brew Crew, yoga with the OmNoms or running with the Hustlers; you’re a part of something bigger than yourself.',
        imageURL: '/images/benefits/benefits-happy-together.jpg',
        color: 'blue'
      }
    ],
    values: [
      {
        icon: '/images/values/icon-values-1.svg',
        heading: 'Accountable',
        description:
          'We aren’t driven by guesswork and hunches, but by results that push the limits of our work. We only commit to what we can deliver and only promise the best.'
      },
      {
        icon: '/images/values/icon-values-2.svg',
        heading: 'Agile',
        description:
          'We’re malleable. Our flexibility allows us to take advantage of our resources. In the midst of chaos, we seek out the opportunities it brings.'
      },
      {
        icon: '/images/values/icon-values-3.svg',
        heading: 'Caring',
        description:
          'We pursue the best interests of our employees, so we can retain talent. By genuinely maintaining these relationships, we ensure better client work.'
      },
      {
        icon: '/images/values/icon-values-4.svg',
        heading: 'Collaborative',
        description:
          'The best work is produced together. Our transparent communication creates a team-like atmosphere.'
      },
      {
        icon: '/images/values/icon-values-5.svg',
        heading: 'Insightful',
        description:
          'Our thinking is grounded in curiosity. We ask the right questions a lot of different ways, giving us the means to reach better solutions.'
      },
      {
        icon: '/images/values/icon-values-6.svg',
        heading: 'Entrepreneurial',
        description:
          "Our competitive approach allows us to seek out innovation—even when it's risky—so we can reap the greatest rewards."
      }
    ]
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
