import React, { Component } from 'react'
import ArrowLeft from '../../images/benefits/arrow-left.svg'
import ArrowRight from '../../images/benefits/arrow-right.svg'
import SVG from 'react-inlinesvg'

export default class Tile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  clicked = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    let color = this.props.color.split(',')
    color[3] = ` ${0.7})`
    color.join()
    return (
      <li className="tile w-96 h-96 lg-w-120 lg-h-120 relative list-reset mx-auto max-w-full mb-8 cursor-pointer overflow-hidden">
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
                'h-16 md-h-32 w-full flex items-center justify-between z-20 tile-transparent px-4'
              }
              style={{ backgroundColor: color.join() }}
            >
              <h4 className="text-white max-w-xs text-xl md-text-4xl uppercase font-thin py-10">
                {this.props.title}
              </h4>
              <button className="tile__arrow-btn" onClick={() => this.clicked()}>
                <SVG src={ArrowRight} />
              </button>
            </div>
          </div>
        </div>
        <div
          className={
            'flex flex-col justify-around items-center tile__slide absolute pin-t pin-b pin-r pin-l py-8 ' +
            (this.state.clicked ? 'tile__slide--present' : '')
          }
          style={{ backgroundColor: this.props.color }}
        >
          <p className="text-white text-center text-lg md-text-xl lg-text-2xl px-4 md-px-8 lg-px-20 leading-normal max-w-full">
            {this.props.description}
          </p>

          <button className="tile__arrow-btn" onClick={() => this.clicked()}>
            <SVG src={ArrowLeft} />
          </button>
        </div>
      </li>
    )
    // ))
  }
}
