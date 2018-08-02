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
    ],
    location: [
      {
        fullName: "Sarah O'Bryan",
        jobTitle: 'Creative Director',
        quotation:
          'With Hothouse being in one of Atlanta’s hottest in-town neighborhoods, it makes it super easy to get to work. My husband (and fellow designer) bikes or runs here every day.',
        image: '/images/headshot-sarah.jpg',
        locationImageText: '/images/text-old-fourth-ward.png',
        locationImage: '/images/location-background-test.jpg'
      },
      {
        fullName: 'John Smith',
        jobTitle: 'Developer',
        quotation:
          'Inman Park has a small neighborhood vibe while still being in an urban setting. There’s so many quaint shops and restaurants, and you can’t beat stopping at Krog Street Market.',
        image: '/images/location-headshot-random-guy.jpg',
        locationImageText: '/images/text-old-fourth-ward.png',
        locationImage: '/images/location-bg-inman.jpg'
      },
      {
        fullName: 'Nakia Henderson',
        jobTitle: 'Administrative Coordinator',
        quotation:
          'I love working near the Atlanta Beltline because it reminds me of home in New York. There’s walkability, art, culture, and it’s a great way to take a moment throughout the day by just going across the street.',
        image: '/images/location-headshot-nakia.jpg',
        locationImageText: '/images/text-old-fourth-ward.png',
        locationImage: '/images/location-bg-beltline.jpg'
      },
      {
        fullName: 'Barbara Tushbant',
        jobTitle: 'Copywriter',
        quotation:
          'I eat lunch at Ponce City Market entirely too much. It’s a perfect storm of “I need to get away from my desk” and “I don’t know what I want to eat for lunch” because it’s across the street and has something for whatever mood I’m in.',
        image: '/images/location-headshot-barbara.jpg',
        locationImageText: '/images/text-old-fourth-ward.png',
        locationImage: '/images/location-bg-pcm.jpg'
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/sections`,
        name: 'sections'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/static/images/`
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: []
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1400,
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-next`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify` // make sure to put last in the array
  ]
}
