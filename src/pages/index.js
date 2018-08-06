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
    this.colorChange = this.colorChange.bind(this)
  }

  componentDidMount() {
    require('smoothscroll-polyfill').polyfill()
    require('intersection-observer')
  }

  handleClick = e => {
    e.preventDefault()
    this.refs[e.currentTarget.dataset.ref].scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    })
  }

  colorChange = (color) => {
this.setState({
  color
})
  }

  isInView = (name, inView, percentage) => {
    if (inView) {
      if (this.state.inView.filter(i => i.name === name).length === 0) {
        this.setState({
          inView: [{ name, percentage }]
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
    let optimImages = this.props.data.allImageSharp.edges
    let toHighlight = this.state.inView.filter(i => i.percentage >= 0 && i.name !== null)

    return (
      <React.Fragment>
        <Nav handleClick={e => this.handleClick(e)} highlight={toHighlight} color={this.state.color}/>

        <div className="welcome-section">
          <div ref="introduction" />
          <div className="bg-welcome-gradient pt-32">
            <ScrollPercentage
              onChange={(percentage, inView) => {
                this.isInView('Meet Us', inView, percentage)
                this.colorChange('grey-lighter')
              }}
            >
              <Introduction data={this.props.data.allMarkdownRemark} />
            </ScrollPercentage>

            <ScrollPercentage
              onChange={(percentage, inView) => {
                this.isInView('Mission', inView, percentage)
                this.colorChange('black-lighter')
              }}
            >
              <div ref="mission" />
              <Mission />
            </ScrollPercentage>
          </div>
        </div>
        <div className="bg-values-gradient">
          <ScrollPercentage
            onChange={(percentage, inView) => {
              this.isInView('Values', inView, percentage)
                this.colorChange('black-lighter')

            }}
          >
            <section className="values-section max-w-2xl px-4 mx-auto md-pb-16 py-16">
              <div ref="values" />

              <Values
                values={
                  edges.filter(i => i.node.frontmatter.id === 'values')[0].node
                    .frontmatter
                }
              />
            </section>
          </ScrollPercentage>
        </div>

        <ScrollPercentage
          onChange={(percentage, inView) => {
            this.isInView('Work Environment', inView, percentage)
                this.colorChange('black-lighter')

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

        <section className="location-section">
          <ScrollPercentage
            onChange={(percentage, inView) => {
              this.isInView('Location', inView, percentage)
                this.colorChange('grey-lighter')
            }}
          >
            <div ref="location" />
            <Location
              location={
                edges.filter(i => i.node.frontmatter.id === 'locations')[0].node
                  .frontmatter
              }
            />
          </ScrollPercentage>
        </section>

        <section className="unfiltered-section max-w-2xl px-4 mx-auto md-pb-16 pt-16 md-pt-32 pb-16">
          <div ref="unfiltered" />
          <ScrollPercentage
            onChange={(percentage, inView) => {
              this.isInView('Photo Gallery', inView, percentage)
                this.colorChange('black-lighter')
            }}
          >
            <Unfiltered
              optimImages={optimImages}
              unfiltered={
                edges.filter(i => i.node.frontmatter.id === 'unfiltered')[0].node
                  .frontmatter
              }
            />
          </ScrollPercentage>
        </section>
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
    allImageSharp {
      edges {
        node {
          id
          sizes {
            srcWebp
            srcSet
            srcSetWebp
            originalName
            src
          }
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
