import React, { Component } from 'react'

export default class Unfiltered extends Component {
  render() {
    let unfilteredSection = this.props.unfiltered
    let unfilteredGallery = unfilteredSection.gallery.galleryImages.map((i, index) => {
      let id
      if (index === 0 || index === 4 || index === 6) {
        id = 'big'
      } else {
        id = 'small'
      }
      return (
        <li className={id} key={index}>
          <div
            style={{
              backgroundImage: 'url(' + i.image + ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <p className="screenreader-only">{i.description}</p>
        </li>
      )
    })

    return (
      <React.Fragment>
        <h2 className="uppercase font-bold text-black text-2xl md-text-4-5xl mb-2 text-center">
          {unfilteredSection.headline}
        </h2>
        <p className="text-black-lighter text-center text-lg md-text-2xl mb-8 md-mb-20">
          {unfilteredSection.subheading}
        </p>
        <ul className="list-reset mx-auto">{unfilteredGallery}</ul>
      </React.Fragment>
    )
  }
}
