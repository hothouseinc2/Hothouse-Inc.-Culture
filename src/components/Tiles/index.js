import React, { Component } from 'react'
import HappyTogether from '../../images/benefits/benefits-happy-together.jpg'
import WorkLife from '../../images/benefits/benefits-work-life-balance.jpg'
import Oppotunities from '../../images/benefits/benefits-oppotunities.jpg'
import LifeLong from '../../images/benefits/benefits-life-long-learning.jpg'

export default class Tiles extends Component {
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

  title
  imgURL
  description
  render() {
    return (
      // <ul className="flex flex-col md-flex-row md-flex-wrap -mx-4 px-4 lg-px-0">
      <li
        className="tile w-96 h-96 lg-w-120 lg-h-120 relative list-reset mx-auto max-w-full mb-8 cursor-pointer overflow-hidden"
        onMouseEnter={() => this.hoverOn()}
        onMouseLeave={() => this.hoverOff()}
      >
        <div
          className="h-full mx-auto flex flex-col flex-wrap justify-end"
          style={{
            backgroundImage: 'url(' + Oppotunities + ')',
            backgroundSize: 'cover'
          }}
        >
          <div className="w-full">
            <div className="h-16 md-h-32 w-full flex items-center z-20 tile-transparent hothouse px-4">
              <h4 className="text-white max-w-xs text-xl md-text-4xl uppercase font-thin py-10">
                Untapped Opportunities
              </h4>
            </div>
          </div>
        </div>
        <div
          className={
            'flex justify-content items-center bg-tile-hothouse tile__slide absolute pin-t pin-b pin-r pin-l ' +
            (this.state.hover ? 'tile__slide--present' : '')
          }
        >
          <p className="text-white text-center text-2xl px-4 leading-normal">
            Leveraging moments that explore undiscovered employee talents and business
            success.{' '}
          </p>
        </div>
      </li>
      //   <li className="w-96 h-96 lg-w-120 lg-h-120 relative list-reset mx-auto px-2 max-w-full md-px-4 mb-8 cursor-pointer">
      //     <div
      //       className="h-full mx-auto flex flex-col flex-wrap justify-end"
      //       style={{
      //         backgroundImage: 'url(' + WorkLife + ')',
      //         backgroundSize: 'cover'
      //       }}
      //     >
      //       <div className="w-full">
      //         <div className="h-16 md-h-32 w-full flex items-center z-20 tile-transparent pink px-4">
      //           <h4 className="max-w-xs text-white text-xl md-text-4xl uppercase font-thin py-10">
      //             Work - Life Balance
      //           </h4>
      //         </div>
      //       </div>
      //     </div>
      //   </li>
      //   <li className="w-96 h-96 lg-w-120 lg-h-120 relative list-reset mx-auto px-2 max-w-full md-px-4 mb-8 cursor-pointer">
      //     <div
      //       className="h-full mx-auto flex flex-col flex-wrap justify-end"
      //       style={{
      //         backgroundImage: 'url(' + LifeLong + ')',
      //         backgroundSize: 'cover'
      //       }}
      //     >
      //       <div className="w-full">
      //         <div className="h-16 md-h-32 w-full flex items-center z-20 tile-transparent orange px-4">
      //           <h4 className="max-w-xs text-white text-xl md-text-4xl uppercase font-thin py-10">
      //             Lifelong Learning
      //           </h4>
      //         </div>
      //       </div>
      //     </div>
      //   </li>
      //   <li className="w-96 h-96 lg-w-120 lg-h-120 relative list-reset mx-auto px-2 max-w-full md-px-4 mb-8 cursor-pointer">
      //     <div
      //       className="h-full mx-auto flex flex-col flex-wrap justify-end"
      //       style={{
      //         backgroundImage: 'url(' + HappyTogether + ')',
      //         backgroundSize: 'cover'
      //       }}
      //     >
      //       <div className="w-full">
      //         <div className="h-16 md-h-32 w-full flex items-center z-20 tile-transparent blue px-4">
      //           <h4 className="max-w-xs text-white text-xl md-text-4xl uppercase font-thin py-10">
      //             Happy Together
      //           </h4>
      //         </div>
      //       </div>
      //     </div>
      //   </li>
      // </ul>
    )
  }
}
