import React, { Component } from 'react'

import NavIcon from '../../images/nav/nav-icon.svg'
import SVG from 'react-inlinesvg'

export default class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      highlight: [...this.props.highlight.filter(i => i.name !== null)]
    }
  }

  render() {
    return (
      <div className="culture-nav md-fixed relative z-20">
        <nav className="culture-nav__inner md-w-64 md-rounded-full p-2 flex justify-center z-40">
          <a
            href="#"
            className="w-1-4 flex justify-center"
            data-ref="introduction"
            onClick={e => {
              this.props.handleClick(e)
            }}
          >
            <span className="culture-nav__item screenreader-only">Introduction</span>
            <SVG src={NavIcon} />
          </a>
          <a
            href="#"
            className="w-1-4 flex justify-center"
            data-ref="mission"
            onClick={e => {
              this.props.handleClick(e)
            }}
          >
            <span className="culture-nav__item screenreader-only">Mission</span>
            <SVG src={NavIcon} />
          </a>
          <a
            href="#"
            className="w-1-4 flex justify-center"
            data-ref="values"
            onClick={e => {
              this.props.handleClick(e)
            }}
          >
            <span className="culture-nav__item screenreader-only">Values</span>
            <SVG src={NavIcon} />
          </a>
          <a
            href="#"
            className="w-1-4 flex justify-center"
            data-ref="benefits"
            onClick={e => {
              this.props.handleClick(e)
            }}
          >
            <span className="culture-nav__item screenreader-only">Benefits</span>
            <SVG src={NavIcon} />
          </a>
          <a
            href="#"
            className="w-1-4 flex justify-center"
            data-ref="location"
            onClick={e => {
              this.props.handleClick(e)
            }}
          >
            <span className="culture-nav__item screenreader-only">Location</span>
            <SVG src={NavIcon} />
          </a>
          <a
            href="#"
            className="w-1-4 flex justify-center"
            data-ref="unfiltered"
            onClick={e => {
              this.props.handleClick(e)
            }}
          >
            <span className="culture-nav__item screenreader-only">
              Hothouse Unfiltered
            </span>
            <SVG src={NavIcon} />
          </a>
        </nav>
        <span className="culture-nav__text">
          {(this.props.highlight[0] && this.props.highlight[0].name) || ''}
        </span>
      </div>
    )
  }
}
