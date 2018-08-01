import React, { Component } from 'react'
import NavIcon from '../../images/nav/nav-icon.svg'
import SVG from 'react-inlinesvg'
import Logo from '../../images/footer/logo-hothouse.svg'
import Link from "gatsby-link"

export default class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      highlight: [...this.props.highlight.filter(i => i.name !== null)],
      navShown: false
    }
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)
  }

  updateDimensions() {
    if (window.innerWidth < 768 && this.state.navShown) {
      this.setState({
      navShown: false
    })
    }
   
  }

  updateNav() {
    this.setState({
      navShown: !this.state.navShown
    })
  }

  render() {
    let navStatus = this.state.navShown ? 'mobile-nav--present' : 'mobile-nav--hidden'

    return (
      <div className="culture-nav md-fixed relative z-20">
        <div className="md-hidden flex justify-between p-4 z-30 relative z-30 bg-white md-bg-transparent">
          <Link to="/"><img src={Logo} alt="" /></Link>
          <button onClick={()=>this.updateNav()}>Menu</button>
        </div>
        <nav className={'culture-nav__inner flex flex-col md-flex-row md-w-64 md-rounded-full md-p-2 flex justify-center bg-white md-bg-transparent absolute md-relative w-full h-screen md-h-auto ' + navStatus}>
          <a
            href="#"
            className="md-w-1-4 flex justify-center no-underline text-blue hover-underline"
            data-ref="introduction"
            onClick={e => {
              this.props.handleClick(e), this.setState({navShown: false})
            }}
          >
            <span className="culture-nav__item md-screenreader-only text-2xl my-4">Introduction</span>
            <span className="hidden md-inline-block">
              <SVG src={NavIcon} />
            </span>
          </a>
          <a
            href="#"
            className="md-w-1-4 flex justify-center no-underline text-blue hover-underline"
            data-ref="mission"
            onClick={e => {
              this.props.handleClick(e), this.setState({navShown: false})
            }}
          >
            <span className="culture-nav__item md-screenreader-only text-2xl my-4">Mission</span>
            <span className="hidden md-inline-block">
              <SVG src={NavIcon} />
            </span>
          </a>
          <a
            href="#"
            className="md-w-1-4 flex justify-center no-underline text-blue hover-underline"
            data-ref="values"
            onClick={e => {
              this.props.handleClick(e), this.setState({navShown: false})
            }}
          >
            <span className="culture-nav__item md-screenreader-only text-2xl my-4">Values</span>
            <span className="hidden md-inline-block">
              <SVG src={NavIcon} />
            </span>
          </a>
          <a
            href="#"
            className="md-w-1-4 flex justify-center no-underline text-blue hover-underline"
            data-ref="benefits"
            onClick={e => {
              this.props.handleClick(e), this.setState({navShown: false})
            }}
          >
            <span className="culture-nav__item md-screenreader-only text-2xl my-4">Benefits</span>
            <span className="hidden md-inline-block">
              <SVG src={NavIcon} />
            </span>
          </a>
          <a
            href="#"
            className="md-w-1-4 flex justify-center no-underline text-blue hover-underline"
            data-ref="location"
            onClick={e => {
              this.props.handleClick(e), this.setState({navShown: false})
            }}
          >
            <span className="culture-nav__item md-screenreader-only text-2xl my-4">Location</span>
            <span className="hidden md-inline-block">
              <SVG src={NavIcon} />
            </span>
          </a>
          <a
            href="#"
            className="md-w-1-4 flex justify-center no-underline text-blue hover-underline"
            data-ref="unfiltered"
            onClick={e => {
              this.props.handleClick(e), this.setState({navShown: false})
            }}
          >
            <span className="culture-nav__item md-screenreader-only text-2xl my-4">
              Hothouse Unfiltered
            </span>
            <span className="hidden md-inline-block">
              <SVG src={NavIcon} />
            </span>
          </a>
        </nav>
        <span className="culture-nav__text hidden md-inline-block">
          {(this.props.highlight[0] && this.props.highlight[0].name) || ''}
        </span>
      </div>
    )
  }
}
