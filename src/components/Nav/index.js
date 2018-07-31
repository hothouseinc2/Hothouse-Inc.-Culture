import React, { Component } from 'react'
import NavIcon from '../../images/nav/NavIcon'

export default class Nav extends Component {
  render() {
    return (
      <nav className="culture-nav md-fixed md-w-64 md-rounded-full p-2 flex justify-center z-40">
        <a
          href="#"
          className="w-1-4 flex justify-center"
          data-ref="introduction"
          onClick={e => {
            this.props.handleClick(e)
          }}
        >
          <span className="screenreader-only">Introduction</span>
          <NavIcon />
        </a>
        <a
          href="#"
          className="w-1-4 flex justify-center"
          data-ref="mission"
          onClick={e => {
            this.props.handleClick(e)
          }}
        >
          <span className="screenreader-only">Mission</span>
          <NavIcon />
        </a>
        <a
          href="#"
          className="w-1-4 flex justify-center"
          data-ref="values"
          onClick={e => {
            this.props.handleClick(e)
          }}
        >
          <span className="screenreader-only">Values</span>
          <NavIcon />
        </a>
        <a
          href="#"
          className="w-1-4 flex justify-center"
          data-ref="benefits"
          onClick={e => {
            this.props.handleClick(e)
          }}
        >
          <span className="screenreader-only">Benefits</span>
          <NavIcon />
        </a>
        <a
          href="#"
          className="w-1-4 flex justify-center"
          data-ref="location"
          onClick={e => {
            this.props.handleClick(e)
          }}
        >
          <span className="screenreader-only">Location</span>
          <NavIcon />
        </a>
        <a
          href="#"
          className="w-1-4 flex justify-center"
          data-ref="unfiltered"
          onClick={e => {
            this.props.handleClick(e)
          }}
        >
          <span className="screenreader-only">Etc</span>
          <NavIcon />
        </a>
      </nav>
    )
  }
}
