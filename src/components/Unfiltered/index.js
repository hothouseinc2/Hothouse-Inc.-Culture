import React, { Component } from 'react'
import Img from 'gatsby-image'

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
    let unfilteredSection = this.props.unfiltered
    // console.log(unfilteredSection.gallery.galleryImages)
    let newImages = []
    unfilteredSection.gallery.galleryImages.map(i => {
      let item = this.props.optimImages.filter(x =>
        i.image.includes(x.node.sizes.originalName)
      )
      newImages.push(item)
    })

    // console.log(newImages)

    // let sizes = this.props.optimImages.filter(x =>
    // i.image.includes(x.node.sizes.originalName)
    // )
    // unfiltered gallery should
    let unfilteredGallery = newImages.map((i, index) => {
      // console.log(sizes)
      // console.log(i.image.includes('.jpg'))
      let id
      if (index === 0 || index === 4 || index === 6) {
        id = 'big'
      } else {
        id = 'small'
      }
      console.log(i[0].node.sizes)
      return (
        <li className={id} key={index}>
          <Img sizes={i[0].node.sizes} />
          {/*<p className="screenreader-only">{i.description}</p>*/}
        </li>

        // <li className={'big'} key={index}>
        // {/*<Img sizes={sizes} />*/}
        // </li>
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
        {/* <Img resolutions={this.state.images[0].image} /> */}
      </React.Fragment>
    )
  }
}
