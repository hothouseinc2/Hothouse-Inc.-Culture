import React, { Component } from 'react'
// import Img from "gatsby-image";

export default class Unfiltered extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: this.props.unfiltered.gallery.galleryImages
    }
  }

  shuffleArray = arr =>
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1])

  componentDidMount = () => {
    this.setState({
      images: this.shuffleArray(this.props.unfiltered.gallery.galleryImages)
    })
  }

  render() {
    console.log(this.state)
    let unfilteredSection = this.props.unfiltered

    let unfilteredGallery = this.state.images.map((i, index) => {
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
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
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
        <p className="text-black-lighter text-center text-lg md-text-2xl mb-8 md-mb-20 md-font-semibold">
          {unfilteredSection.subheading}
        </p>
        <ul className="list-reset mx-auto">{unfilteredGallery}</ul>
      </React.Fragment>
    )
  }
}
