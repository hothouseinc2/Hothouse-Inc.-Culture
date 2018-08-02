import React, { Component } from 'react'
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

import ScrollPercentage from 'react-scroll-percentage'

export default class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeItem: null,
      inView: [
        {
          name: null,
          percentage: 0
        }
      ]
    }

    this.isInView = this.isInView.bind(this)
  }

  componentDidMount() {
    require('smoothscroll-polyfill').polyfill()
  }

  handleClick = e => {
    e.preventDefault()
    this.refs[e.currentTarget.dataset.ref].scrollIntoView({
      behavior: 'smooth'
    })
  }

  isInView = (name, inView, percentage) => {
    if (inView) {
      if (this.state.inView.filter(i => i.name === name).length === 0) {
        this.setState({
          inView: [...this.state.inView, { name, percentage }]
        })
      }
    } else {
      if (this.state.inView.filter(i => i.name === name).length > 0) {
        this.setState({
          inView: [...this.state.inView.filter(i => i.name !== name)]
        })
      }
    }
  }

  render() {
    let { edges } = this.props.data.allMarkdownRemark
    let toHighlight = this.state.inView.filter(i => i.percentage >= 0 && i.name !== null)
    return (
      <React.Fragment>
        <Nav handleClick={e => this.handleClick(e)} highlight={toHighlight} />

        <div className="welcome-section">
          <div ref="introduction" />
          <div className="bg-welcome-gradient pt-32">
            <ScrollPercentage
              onChange={(percentage, inView) => {
                this.isInView('Meet Us', inView, percentage)
              }}
            >
              <Introduction data={this.props.data.allMarkdownRemark} />
            </ScrollPercentage>

            <ScrollPercentage
              onChange={(percentage, inView) => {
                this.isInView('Mission', inView, percentage)
              }}
            >
              <div ref="mission" />
              <Mission />
            </ScrollPercentage>
          </div>
        </div>
        <div className="bg-values-gradient">
          <section className="values-section max-w-2xl px-4 mx-auto md-pb-16 py-16">
            <div ref="values" />
            <ScrollPercentage
              onChange={(percentage, inView) => {
                this.isInView('Values', inView, percentage)
              }}
            >
              <Values
                values={
                  edges.filter(i => i.node.frontmatter.id === 'values')[0].node
                    .frontmatter
                }
              />
            </ScrollPercentage>
          </section>
        </div>

        <ScrollPercentage
          onChange={(percentage, inView) => {
            this.isInView('Work Environment', inView, percentage)
          }}
        >
          <section className="benefits-section bg-grey pt-16 md-pt-32 pb-16">
            <div ref="benefits" />
            <Benefits
              benefits={
                edges.filter(i => i.node.frontmatter.id === 'benefits')[0].node
                  .frontmatter
              }
            />
          </section>
        </ScrollPercentage>

        <ScrollPercentage
          onChange={(percentage, inView) => {
            this.isInView('Location', inView, percentage)
          }}
        >
          <section className="location-section h-screen">
            <div ref="location" />
            <Location
              location={
                edges.filter(i => i.node.frontmatter.id === 'locations')[0].node
                  .frontmatter
              }
            />
          </section>
        </ScrollPercentage>

        <ScrollPercentage
          onChange={(percentage, inView) => {
            this.isInView('Photo Gallery', inView, percentage)
          }}
        >
          <section className="unfiltered-section max-w-2xl px-4 mx-auto md-pb-16 pt-16 md-pt-32 pb-16">
            <div ref="unfiltered" />

            <Unfiltered
              unfiltered={
                edges.filter(i => i.node.frontmatter.id === 'unfiltered')[0].node
                  .frontmatter
              }
            />
          </section>
        </ScrollPercentage>
        <section className="referal-section bg-hothouse py-16 md-py-32">
          <Referral />
        </section>
        <footer
          className="pt-32 h-156 bg-blue"
          style={{
            backgroundImage: 'url(' + bg + ')',
            backgroundSize: '100% auto',
            backgroundPosition: 'bottom',
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
