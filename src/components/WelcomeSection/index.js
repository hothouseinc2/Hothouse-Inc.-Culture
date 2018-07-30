import React, { Component } from 'react'
import Logo from '../../images/hothouse-logo.svg'
import Caret from '../../images/caret.svg'
import MtnIllustration from '../../images/mission/bottom-illustration.svg'
import SmallCityIllustration from '../../images/location/illustration-city.png'
import MiddleClouds from '../../images/mission/middle-clouds.svg'
import TopClouds from '../../images/mission/top-clouds.svg'
import Tiles from '../Tiles'
import IconArrow from '../../images/apply/IconArrow'
import Carousel from 'nuka-carousel'

export default class WelcomeSection extends Component {
  render() {
    let { edges } = this.props.data
    let header = edges.filter(i => i.node.frontmatter.id === 'header')[0].node.frontmatter
    let uniqueEnvironment = edges.filter(i => i.node.frontmatter.id === 'benefits')[0]
      .node.frontmatter
    let uniqueEnvironmentItems = uniqueEnvironment.howWeStandOut.points

    let valuesSection = edges.filter(i => i.node.frontmatter.id === 'values')[0].node
      .frontmatter
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

    let unfilteredSection = edges.filter(i => i.node.frontmatter.id === 'unfiltered')[0]
      .node.frontmatter
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

    let { location } = this.props
    let locations = location.locations.listOflocations.map((i, index) => (
      <div
        className="h-screen flex justify-center items-center"
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
            <img src={i.headshot} alt="" />
          </div>
          <div className="flex flex-col h-120 w-full md-w-3-5">
            <div className="bg-location flex-1 p-4">
              <blockquote className="text-xl md-text-2xl text-black mx-auto md-mx-0 max-w-sm mt-8 pb-4">
                {i.quotation}
              </blockquote>
              <hr className="border-b border-black-light mb-2 mx-0 max-w-xs " />
              <cite className="text-xl font-thin max-w-xs roman block">
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

    let benefits = uniqueEnvironmentItems.map((i, index) => (
      <Tiles
        key={index}
        title={i.title}
        imageURL={i.image}
        description={i.description}
        color={i.color}
      />
    ))

    let video = {
      __html: `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src=${
        header.video
      } style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`
    }
    return (
      <div className="welcome-section">
        <div className="bg-welcome-gradient pt-32">
          <header>
            <img src={Logo} alt="" className="block mx-auto mb-12" />
            <h1 className="uppercase text-white text-2xl md-text-4-5xl text-center mb-16">
              {header.greeting}
            </h1>
            <p className="font-sans text-white px-4 md-px-0 text-lg md-text-2xl mb-16 leading-normal text-center max-w-lg mx-auto">
              {header.description}
            </p>
            <p className="font-sans text-white tracking-normal text-xl mb-4 leading-normal text-center max-w-md mx-auto font-semibold">
              {header.cta}
            </p>
            <div
              style={{
                backgroundImage: 'url(' + TopClouds + ')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                backgroundPosition: 'center'
              }}
              className="w-full"
            >
              <div className="max-w-xl mx-auto" dangerouslySetInnerHTML={video} />;
            </div>
          </header>
          <section className="mission-section mt-64">
            <div className="relative">
              <img
                className="mission-section__middle-clouds absolute"
                src={MiddleClouds}
                alt=""
              />
              <h2 className="text-center uppercase mb-16 md-mb-32 text-tile-blue max-w-xs mx-auto">
                <span className="block text-xl mission__accents text-hothouse">
                  Our Mission
                </span>
                <div className="text-2xl md-text-4-5xl font-normal">
                  <span className="block">The Unknown</span>
                  <span className="block font-bold">Equals</span>
                  <span className="block">Opportunity</span>
                </div>
              </h2>
            </div>
            <p className="text-black-lighter text-lg md-text-2xl px-4 md-px-0 max-w-sm md-max-w-md lg-max-w-lg mb-24 mx-auto text-center leading-normal">
              We rewrite the equations to our clients’ problems, so we can create
              different solutions than everyone else. We look for answers in unlikely
              places and bring unexpected thinking to all our clients’ challenges.{' '}
            </p>
            <img
              className="max-w-3xl px-4 block mx-auto pb-8 w-full"
              src={MtnIllustration}
              alt=""
            />
          </section>
        </div>
        <div className="bg-values-gradient">
          <section className="values-section max-w-2xl px-4 mx-auto md-pb-16 py-16">
            <h2 className="uppercase text-black text-center text-2xl md-text-4-5xl mb-16 md-mb-32">
              {valuesSection.title}
            </h2>
            <ul className="flex flex-col md-flex-row flex-wrap list-reset text-center">
              {values}
            </ul>
            <img src={Caret} alt="" className="block my-4 md-my-16 mx-auto" />
          </section>
          <section className="benefits-section bg-grey pt-16 md-pt-32 pb-16">
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
          </section>
        </div>
        <section className="location-section h-screen">
          <Carousel dragging={true}>
            <div className="bg-blue h-screen text-white text-center py-32">
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
        </section>
        <section className="unfiltered-section max-w-2xl px-4 mx-auto md-pb-16 pt-16 md-pt-32 pb-16">
          <h2 className="uppercase font-bold text-black text-2xl md-text-4-5xl mb-2 text-center">
            {unfilteredSection.headline}
          </h2>
          <p className="text-black-lighter text-center text-lg md-text-2xl mb-8 md-mb-20">
            {unfilteredSection.subheading}
          </p>
          <ul className="list-reset max-w-xl mx-auto">{unfilteredGallery}</ul>
        </section>
        <section className="referal-section bg-hothouse py-16 md-py-32">
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
        </section>
      </div>
    )
  }
}
