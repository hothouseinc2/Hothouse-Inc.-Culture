import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Nav from '../components/Nav'

import './generated.css'

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-darkest overflow-x-hidden">
    <Helmet
      title="Hothouse Inc. | Culture"
      meta={[
        {
          name: 'description',
          content:
            'Hothouse is an agency driven by innovation, accountability and a deep desire to understand your brand, your customers and your competitors.'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        { itemprop: 'name', content: 'Hothouse Inc. Culture Site' },
        {
          itemprop: 'description',
          content:
            'Hothouse is an agency driven by innovation, accountability and a deep desire to understand your brand, your customers and your competitors.'
        }, // <!-- Schema image tag must be at least 180x120px -->
        { itemprop: 'image', content: 'assets/google-plus-image.png' }, // <!-- Twitter Card data -->
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@HothouseInc' },
        { name: 'twitter:title', content: 'Hothouse Inc. Culture Site' },
        {
          name: 'twitter:description',
          content:
            'Hothouse is an agency driven by innovation, accountability and a deep desire to understand your brand, your customers and your competitors.'
        },
        { name: 'twitter:creator', content: '@HothouseInc' }, // <!-- Twitter summary card with large image must be at least 280x150px -->
        { name: 'twitter:image:src', content: 'assets/twitter-image.png' }, // <!-- Open Graph data -->
        { property: 'og:title', content: 'Hothouse Inc. Culture Site' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'http://hothouseinc.com/' }, // <!-- Open graph image should be 1200 x 1200 (more info here: http://www.h3xed.com/web-and-internet/how-to-use-og-image-meta-tag-facebook-reddit) -->
        { property: 'og:image', content: 'assets/op-image.jpg' },
        {
          property: 'og:description',
          content:
            'Hothouse is an agency driven by innovation, accountability and a deep desire to understand your brand, your customers and your competitors.'
        },
        { property: 'og:site_name', content: 'Hothouse Inc. Culture Site' },
        { name: 'theme-color', content: '#F7484E' }
      ]}
      link={[
        { rel: 'shortcut icon', href: 'assets/favicon.ico', type: 'image/x-icon' },
        { rel: 'icon', href: 'assets/favicon.ico', type: 'image/x-icon' }
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Nav />
    <div className="site-inner">{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
