import React, { Component } from 'react'
import Caret from '../../images/caret.svg'

export default class Values extends Component {
  render() {
    let valuesSection = this.props.values
    let values = valuesSection.listOfValues.values.map((i, index) => (
      <li className="w-full md-w-1-2 lg-w-1-3 mb-16 md-mb-32" key={index}>
        <div>
          <div className="mb-8 w-64 h-64 relative mx-auto flex justify-center">
            <img className="absolute pin-b" src={i.icon} alt="" />
          </div>
          <div className="max-w-xs mx-auto">
            <h3 className="mb-4 uppercase text-black-light text-xl md-text-3xl font-medium">
              {i.name}
            </h3>
            <p className="text-lg md-text-xl text-black-lighter leading-tight px-6">
              {i.description}
            </p>
          </div>
        </div>
      </li>
    ))

    return (
      <React.Fragment>
        <h2 className="uppercase text-black text-center text-2xl md-text-4-5xl mb-16 md-mb-32">
          {valuesSection.title}
        </h2>
        <ul className="flex flex-col md-flex-row flex-wrap list-reset text-center">
          {values}
        </ul>
        <img src={Caret} alt="" className="block my-4 md-my-16 mx-auto" />
      </React.Fragment>
    )
  }
}
