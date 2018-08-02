import React, { Component, Fragment } from 'react'
import Carousel from '../Carousel/index'
import SmallCityIllustration from '../../images/location/illustration-city.png'
// import { PreviousButton } from '../NewControls'

export default class Location extends Component {
  render() {
    let { location } = this.props
    let locations = location.locations.listOflocations.map((i, index) => (
      <div
        className="h-screen flex justify-center items-center min-h-600"
        key={index}
        style={{
          backgroundImage: 'url(' + i.locationImage + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-lg flex flex-col md-flex-row w-full">
          <div className="bg-location p-4 shadow w-full md-w-2-5 flex items-center justify-center">
            <div className="w-1-2 md-w-full pt-8 md-pt-0">
              <img src={i.headshot} alt="" />
            </div>
          </div>
          <div className="flex flex-col h-120 w-full md-w-3-5">
            <div className="bg-location flex-1 p-4">
              <blockquote className="text-xl md-text-2xl text-black mx-auto md-mx-0 max-w-sm md-mt-8 pb-4">
                {i.quotation}
              </blockquote>
              <hr className="border-b border-black-light mb-2 mx-auto md-mx-0 max-w-xs " />
              <cite className="text-xl mx-auto md-mx-0 font-thin max-w-xs roman block">
                {i.name} | {i.jobTitle}
              </cite>
            </div>
            <div
              className="self-end"
              style={{
                backgroundImage: 'url(' + i.locationNameImage + ')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '135px',
                width: '100%'
              }}
            />
          </div>
        </div>
      </div>
    ))
    return (
      <React.Fragment>
        <Carousel
          dragging={true}
          // renderBottomLeftControls={({ previousSlide }) => PreviousButton}
          // decorators={Decorators}
        >
          <div className="bg-blue h-screen text-white text-center py-32 min-h-600">
            <div className="max-w-mdlg mx-auto px-4 md-pd-0">
              <img src={SmallCityIllustration} alt="" className="mb-16 md-mb-8" />
              <h2 className="uppercase text-2xl md-text-4-5xl mb-4 max-w-lg mx-auto">
                {location.headline}
              </h2>
              <p className="text-black-lighter text-lg md-text-2xl max-w-sm mx-auto">
                {location.subheading}
              </p>
            </div>
          </div>

          {locations}
        </Carousel>
      </React.Fragment>
    )
  }
}
