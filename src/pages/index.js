import React, { Component } from 'react'
import WelcomeSection from '../components/WelcomeSection'
import Footer from '../components/Footer'

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <WelcomeSection
          values={this.props.data.site.siteMetadata.values}
          benefits={this.props.data.site.siteMetadata.benefits}
          data={this.props.data.allMarkdownRemark}
        />
        <Footer />
      </div>
    )
  }
}

export const layoutQuery = graphql`
  query layoutQuery {
    site {
      siteMetadata {
        benefits {
          title
          description
          imageURL
          color
        }
        values {
          icon
          heading
          description
        }
      }
    }

    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            id
            title
            description
            greeting
            cta
            videoURL
            howWeStandOut {
              points{color
              title
              description
              image
              }
            }
            listOfValues {
              values {
                description
                icon
                name
              }
            }
          }
        }
      }
    }
  }
`
