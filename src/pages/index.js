import React, { Component } from 'react'
import WelcomeSection from '../components/WelcomeSection'
import Footer from '../components/Footer'

export default class IndexPage extends Component {
  render() {
    let { edges } = this.props.data.allMarkdownRemark
    return (
      <div>
        <WelcomeSection
          values={
            edges.filter(i => i.node.frontmatter.id === 'values')[0].node.frontmatter
              .values
          }
          benefits={
            edges.filter(i => i.node.frontmatter.id === 'benefits')[0].node.frontmatter
              .benefits
          }
          location={
            edges.filter(i => i.node.frontmatter.id === 'locations')[0].node.frontmatter
          }
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
        location {
          fullName
          jobTitle
          quotation
          image
          locationImageText
          locationImage
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
            video
            howWeStandOut {
              points {
                color
                title
                description
                image
              }
            }
            headline
            subheading

            locations {
              listOflocations {
                headshot
                jobTitle
                locationImage
                locationNameImage
                name
                quotation
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
