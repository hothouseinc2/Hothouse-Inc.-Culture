import React, { Component } from 'react'
import WelcomeSection from '../components/WelcomeSection'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import bg from '../images/footer/illustration.png'

import Introduction from '../components/Introduction'
import Mission from '../components/Mission'
import Values from '../components/Values'
import Benefits from '../components/Benefits'
import Location from '../components/Location'
import Unfiltered from '../components/Unfiltered'
import Referral from '../components/Referral'

export default class IndexPage extends Component {
  componentDidMount() {
    require('smoothscroll-polyfill').polyfill()
  }

  handleClick = e => {
    e.preventDefault()
    this.refs[e.currentTarget.dataset.ref].scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    let { edges } = this.props.data.allMarkdownRemark
    return (
      <React.Fragment>
        <Nav handleClick={e => this.handleClick(e)} />
        <div className="welcome-section" ref="introduction">
          <div className="bg-welcome-gradient pt-32">
            <Introduction data={this.props.data.allMarkdownRemark} />
            <div ref="mission">
              <Mission />
            </div>
          </div>
        </div>
        <div className="bg-values-gradient">
          <section
            className="values-section max-w-2xl px-4 mx-auto md-pb-16 py-16"
            ref="values"
          >
            <Values
              values={
                edges.filter(i => i.node.frontmatter.id === 'values')[0].node.frontmatter
              }
            />
          </section>
        </div>
        <section className="benefits-section bg-grey pt-16 md-pt-32 pb-16" ref="benefits">
          <Benefits
            benefits={
              edges.filter(i => i.node.frontmatter.id === 'benefits')[0].node.frontmatter
            }
          />
        </section>
        <section className="location-section h-screen" ref="location">
          <Location
            location={
              edges.filter(i => i.node.frontmatter.id === 'locations')[0].node.frontmatter
            }
          />
        </section>
        <section
          className="unfiltered-section max-w-2xl px-4 mx-auto md-pb-16 pt-16 md-pt-32 pb-16"
          ref="unfiltered"
        >
          <Unfiltered
            unfiltered={
              edges.filter(i => i.node.frontmatter.id === 'unfiltered')[0].node
                .frontmatter
            }
          />
        </section>

        <section className="referal-section bg-hothouse py-16 md-py-32">
          <Referral />
        </section>
        <footer
          className="pt-32 h-156 bg-blue"
          style={{
            backgroundImage: 'url(' + bg + ')',
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <Footer />
        </footer>
      </React.Fragment>
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
            headline
            subheading
            gallery {
              galleryImages {
                description
                image
              }
            }
          }
        }
      }
    }
  }
`
