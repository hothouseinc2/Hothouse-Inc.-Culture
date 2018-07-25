import React, { Component } from 'react'
import Logo from '../../images/hothouse-logo.svg'
import Caret from '../../images/caret.svg'
import MtnIllustration from '../../images/mission/bottom-illustration.svg'
import SmallCityIllustration from '../../images/location/illustration-city.png'
import MiddleClouds from '../../images/mission/middle-clouds.svg'
import Tiles from '../Tiles'
import IconArrow from '../../images/apply/IconArrow'
import Carousel from 'nuka-carousel'
import BgBeltline from '../../images/location/bg-beltline.svg'
import BgO4w from '../../images/location/text-old-fourth-ward.png'
import LocationBackground from '../../images/location/location-background-test.jpg'

export default class WelcomeSection extends Component {
  render() {
    let { edges } = this.props.data
    let header = edges.filter(i => i.node.frontmatter.id === 'header')[0].node.frontmatter
    let uniqueEnvironment = edges.filter(i => i.node.frontmatter.id === 'benefits')[0]
      .node.frontmatter
    let valuesSection = edges.filter(i => i.node.frontmatter.id === 'values')[0].node
      .frontmatter

    console.log(valuesSection)
    let values = valuesSection.listOfValues.values.map((i, index) => (
      <li className="w-full md-w-1-2 lg-w-1-3 mb-32" key={index}>
        <div>
          <div className="mb-8 w-64 h-64 relative mx-auto">
            <img className="absolute" src={i.icon} alt="" />
          </div>
          <div className="max-w-xs mx-auto">
            <h3 className="mb-4 uppercase text-black-light text-3xl font-medium">
              {i.name}
            </h3>
            <p className="text-lg md-text-xl text-black-lighter leading-tight">
              {i.description}
            </p>
          </div>
        </div>
      </li>
    ))

    let benefits = this.props.benefits.map((i, index) => (
      <Tiles
        key={index}
        title={i.title}
        imageURL={i.imageURL}
        description={i.description}
        color={i.color}
      />
    ))

    let video = {
      __html: `<iframe class="mx-auto max-w-full block" src="https://player.vimeo.com/video/180169500" width="995" height="560" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`
    }
    return (
      <div className="welcome-section bg-welcome-gradient pt-32">
        <header>
          <img src={Logo} alt="" className="block mx-auto mb-12" />
          <h1 className="uppercase text-white text-2xl md-text-4-5xl text-center">
            {header.greeting}
          </h1>
          <p className="font-sans text-white px-4 md-px-0 text-lg md-text-2xl mb-12 leading-normal text-center max-w-md mx-auto">
            {header.description}
          </p>
          <p className="mb-8 font-sans text-white tracking-normal text-xl mb-12 leading-normal text-center max-w-md mx-auto font-bold">
            {header.cta}
          </p>
          <div className="" dangerouslySetInnerHTML={video} />;
        </header>
        <section className="mission-section mt-64">
          <div className="relative">
            <img
              className="mission-section__middle-clouds absolute"
              src={MiddleClouds}
              alt=""
            />
            <h2 className="text-center uppercase mb-32 text-tile-blue max-w-xs mx-auto">
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
          <img
            className="max-w-3xl px-4 block mx-auto mb-8 w-full"
            src={MtnIllustration}
            alt=""
          />
        </section>
        <section className="values-section max-w-2xl px-4 mx-auto md-pb-16 py-16">
          <h2 className="uppercase text-black text-center text-4-5xl mb-32">
            {valuesSection.title}
          </h2>
          <ul className="flex flex-col md-flex-row flex-wrap list-reset text-center">
            {values}
          </ul>
          <img src={Caret} alt="" className="block my-16 mx-auto" />
        </section>
        <section className="benefits-section bg-grey pt-32">
          <h2 className="text-black uppercase text-4-5xl text-center max-w-md mx-auto mb-4">
            {uniqueEnvironment.title}
          </h2>
          <h3 className="text-grey text-lg md-text-2xl font-semibold text-grey-darker text-center mb-20 px-4">
            {uniqueEnvironment.description}
          </h3>
          <div className="mx-auto max-w-xl px-4 md-px-0">
            <ul className="flex flex-col md-flex-row md-flex-wrap -mx-4 px-4 lg-px-0 lg-px-0">
              {benefits}{' '}
            </ul>
          </div>
          <img src={Caret} alt="" className="block mx-auto" />
        </section>
        <section className="location-section h-screen">
          <Carousel dragging={true}>
            <div className="bg-blue h-screen text-white text-center py-32">
              <div className="max-w-md mx-auto">
                <img src={SmallCityIllustration} alt="" className="mb-8" />
                <h2 className="uppercase text-3xl md-text-4-5xl mb-4 max-w-md mx-auto">
                  We're located on the{' '}
                  <span className="block">corner of chill vibes and</span> the go-getter
                  hustle.
                </h2>
                <p className="text-black-lighter text-2xl max-w-sm mx-auto">
                  Our neighborhood helps make us unique. Explore what we love about it.{' '}
                </p>
              </div>
            </div>
            <div
              className="h-screen flex justify-center items-center"
              style={{
                backgroundImage: 'url(' + LocationBackground + ')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="max-w-md flex">
                <div className="bg-location p-4 shadow">
                  <img src="http://via.placeholder.com/307x438" alt="" />
                </div>
                <div className="flex flex-col">
                  <div className="bg-location flex-1 p-4">
                    <blockquote>
                      Be less curious about people and more curious about ideas.
                    </blockquote>
                  </div>
                  <div
                  className="self-end"
                    style={{
                      backgroundImage: 'url(' + BgO4w + ')',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '92px',
                      width: '100%'
                    }}
                  />
                </div>
              </div>
            </div>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
          </Carousel>
        </section>
        <section className="unfiltered-section max-w-2xl px-4 mx-auto md-pb-16 py-16">
          <h2 className="uppercase font-bold text-black text-2xl md-text-4-5xl mb-2 mt-8 text-center">
            Hothouse Unfiltered
          </h2>
          <p className="text-black-lighter text-center text-2xl mb-20">
            Take a peek into the way we work—and play.
          </p>
          <ul className="list-reset max-w-xl mx-auto">
            <li className="big">
              <div
                style={{
                  backgroundImage:
                    'url(https://s3.amazonaws.com/assets.hothouseculturesite/assets/big1.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </li>
            <li className="small">
              <div
                style={{
                  backgroundImage:
                    'url(https://s3.amazonaws.com/assets.hothouseculturesite/assets/small1.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </li>
            <li className="small">
              <div
                style={{
                  backgroundImage:
                    'url(https://s3.amazonaws.com/assets.hothouseculturesite/assets/small2.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </li>
            <li className="small">
              <div
                style={{
                  backgroundImage:
                    'url(https://s3.amazonaws.com/assets.hothouseculturesite/assets/small3.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </li>
            <li className="big">
              <div
                style={{
                  backgroundImage:
                    'url(https://s3.amazonaws.com/assets.hothouseculturesite/assets/big2.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </li>
            <li className="small">
              <div
                style={{
                  backgroundImage:
                    'url(https://s3.amazonaws.com/assets.hothouseculturesite/assets/small4.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </li>
            <li className="big">
              <div
                style={{
                  backgroundImage:
                    'url(https://s3.amazonaws.com/assets.hothouseculturesite/assets/big3.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </li>
            <li className="small">
              <div
                style={{
                  backgroundImage:
                    'url(https://s3.amazonaws.com/assets.hothouseculturesite/assets/small5.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </li>
            <li className="small">
              <div
                style={{
                  backgroundImage:
                    'url(https://s3.amazonaws.com/assets.hothouseculturesite/assets/small6.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </li>
          </ul>
        </section>
        <section className="benefits-section bg-hothouse py-16 md-py-32">
          <div className="max-w-2xl mx-auto w-full md-flex px-4 md-px-0">
            <div className="md-w-3-4 text-center">
              <h2 className="uppercase font-bold text-white text-2xl md-text-4-5xl mb-2 mt-8">
                Do you belong here?{' '}
                <span className="block md-inline">(We think so.)</span>
              </h2>
              <p className="text-lg md-text-2xl text-white font-semibold mb-16 md-mb-0">
                Then check out our open positions.
              </p>
            </div>
            <div className="md-w-1-4 flex justify-center items-center md-items-start">
              <a
                href="http://hothouseinc.com/people/#become-one-of-us"
                target="_blank"
                className="benefits-section__link block w-24 h-24 rounded-full flex justify-center items-center hover-bg-blue"
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
