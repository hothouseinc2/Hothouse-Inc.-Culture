import React, { Component } from 'react'
import Tiles from '../Tiles'
import Caret from '../../images/caret.svg'

export default class Benefits extends Component {
  render() {
    let uniqueEnvironment = this.props.benefits
    let uniqueEnvironmentItems = uniqueEnvironment.howWeStandOut.points

    let benefits = uniqueEnvironmentItems.map((i, index) => (
      <Tiles
        key={index}
        title={i.title}
        imageURL={i.image}
        description={i.description}
        color={i.color}
      />
    ))

    return (
      <React.Fragment>
        <h2 className="text-black uppercase text-2xl md-text-4-5xl text-center max-w-md mx-auto mb-4">
          {uniqueEnvironment.title}
        </h2>
        <h3 className="text-grey text-lg md-text-2xl font-semibold text-grey-darker text-center mb-8 md-mb-20 px-4">
          {uniqueEnvironment.description}
        </h3>
        <div className="mx-auto max-w-xl px-4 md-px-0">
          <ul className="flex flex-col md-flex-row md-flex-wrap -mx-4 px-4 lg-px-0 lg-px-0 mb-24">
            {benefits}{' '}
          </ul>
        </div>
        <img src={Caret} alt="" className="block mx-auto" />
      </React.Fragment>
    )
  }
}
