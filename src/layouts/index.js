import 'intersection-observer'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './generated.css'

export default class TemplateWrapper extends Component {
  render() {
    return (
      <div className="flex flex-col font-sans min-h-screen text-grey-darkest overflow-x-hidden">
        <Helmet
          title="Hi, we’re Hothouse."
          meta={[
            {
              name: 'description',
              content:
                'This is a unique place – one where co-workers get together in our off time, and we actually look forward to showing up every morning.'
            },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1'
            },
            {
              itemprop: 'name',
              content: 'Hi, we’re Hothouse.'
            },
            {
              itemprop: 'description',
              content:
                'This is a unique place – one where co-workers get together in our off time, and we actually look forward to showing up every morning.'
            }, // <!-- Schema image tag must be at least 180x120px -->
            { itemprop: 'image', content: 'assets/google-plus-image.png' }, // <!-- Twitter Card data -->
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@HothouseInc' },
            { name: 'twitter:title', content: 'Hothouse Inc. Culture Site' },
            {
              name: 'twitter:description',
              content:
                'Hi, we’re Hothouse. This is a unique place – one where co-workers get together in our off time, and we actually look forward to showing up every morning.'
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
                'Hi, we’re Hothouse. This is a unique place – one where co-workers get together in our off time, and we actually look forward to showing up every morning.'
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

        <div className="site-inner">{this.props.children()}</div>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}
