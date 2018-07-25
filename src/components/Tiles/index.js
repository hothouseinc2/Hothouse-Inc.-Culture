import React, { Component } from 'react'

export default class Tile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
  }

  hoverOn = () => {
    this.setState({
      hover: true
    })
  }

  hoverOff = () => {
    this.setState({
      hover: false
    })
  }

  render() {
      let color = this.props.color.split(',')
      color[3] = ` ${0.5})`
      color.join()
    return (
      <li
        className="tile w-96 h-96 lg-w-120 lg-h-120 relative list-reset mx-auto max-w-full mb-8 cursor-pointer overflow-hidden"
        onMouseEnter={() => this.hoverOn()}
        onMouseLeave={() => this.hoverOff()}
      >
        <div
          className="h-full mx-auto flex flex-col flex-wrap justify-end"
          style={{
            backgroundImage: 'url(' + this.props.imageURL + ')',
            backgroundSize: 'cover'
          }}
        >
          <div className="w-full">
            <div
              className={
                'h-16 md-h-32 w-full flex items-center z-20 tile-transparent px-4'
              } style={{backgroundColor: color.join()}}
            >
              <h4 className="text-white max-w-xs text-xl md-text-4xl uppercase font-thin py-10">
                {this.props.title}
              </h4>
            </div>
          </div>
        </div>
        <div
          className={
            'flex justify-content items-center tile__slide absolute pin-t pin-b pin-r pin-l ' +
            (this.state.hover ? 'tile__slide--present' : '')
          }
          style={{backgroundColor: this.props.color}}
        >
          <p className="text-white text-center text-lg md-text-2xl px-4 leading-normal">
            {this.props.description}
          </p>
        </div>
      </li>
    )
    // ))
  }
}
