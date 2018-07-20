import React, { Component } from 'react'
import NavIcon from '../../images/nav/NavIcon'

export default class Nav extends Component {
  componentDidMount() {
    require('smoothscroll-polyfill').polyfill()
  }

  handleClick(e) {
    e.preventDefault()
    // this.refs.[about].scrollIntoView({ behavior: 'smooth' })
  }

  // ref="about"
  render() {
    return (
      <nav className="culture-nav bg-blue md-fixed md-w-64 md-rounded-full p-2 flex justify-center z-40">
        <a
          href="#"
          className="w-1-4 flex justify-center"
          onClick={e => {
            this.handleClick(e)
          }}
        >
          <span className="screenreader-only">Introduction</span>
          <NavIcon />
        </a>
        <a href="#" className="w-1-4 flex justify-center">
          <span className="screenreader-only">Mission</span>
          <NavIcon />
        </a>
        <a href="#" className="w-1-4 flex justify-center">
          <span className="screenreader-only">Values</span>
          <NavIcon />
        </a>
        <a href="#" className="w-1-4 flex justify-center">
          <span className="screenreader-only">Benefits</span>
          <NavIcon />
        </a>
        <a href="#" className="w-1-4 flex justify-center">
          <span className="screenreader-only">Location</span>
          <NavIcon />
        </a>
        <a href="#" className="w-1-4 flex justify-center">
          <span className="screenreader-only">Etc</span>
          <NavIcon />
        </a>
      </nav>
    )
  }
}
