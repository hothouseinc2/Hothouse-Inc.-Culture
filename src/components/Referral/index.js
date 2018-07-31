import React, { Component } from 'react'
import IconArrow from '../../images/apply/IconArrow'

export default class Referral extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="max-w-2xl mx-auto w-full md-flex px-4 md-px-0">
          <div className="md-w-3-4 text-center">
            <h2 className="uppercase font-bold text-white text-2xl md-text-4-5xl mb-2 mt-3">
              Want to work here?{' '}
            </h2>
            <p className="text-lg md-text-2xl text-white font-semibold mb-16 md-mb-0">
              View our open positions.
            </p>
          </div>
          <div className="md-w-1-4 flex justify-center items-center md-items-start">
            <a
              href="http://hothouseinc.com/people/#become-one-of-us"
              target="_blank"
              className="referal-section__link block w-24 h-24 rounded-full flex justify-center items-center hover-bg-blue"
            >
              <IconArrow />
            </a>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
