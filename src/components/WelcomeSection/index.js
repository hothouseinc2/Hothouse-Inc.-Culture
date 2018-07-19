import React, { Component } from 'react'
import Logo from '../../images/hothouse-logo.svg'
import Caret from '../../images/caret.svg'
import Illustration from '../../images/mission/bottom-illustration.svg'
import MiddleClouds from '../../images/mission/middle-clouds.svg'
import Tiles from '../Tiles'

export default class WelcomeSection extends Component {
  render() {
    let values = this.props.values.map((i, index) => (
      <li className="w-full md-w-1-2 lg-w-1-3 mb-32">
        <div>
          <div className="mb-8 w-64 h-64 relative mx-auto">
            <img className="absolute" src={i.icon} alt="" />
          </div>
          <div className="max-w-xs mx-auto">
            <h3 className="mb-4 uppercase text-black-light text-3xl font-medium">
              {i.heading}
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
    return (
      <div className="welcome-section bg-welcome-gradient pt-32">
        <header>
          <img src={Logo} alt="" className="block mx-auto mb-12" />
          <h1 className="uppercase text-white text-2xl md-text-4-5xl text-center">
            Hi, we're Hothouse.
          </h1>
          <p className="font-sans text-white px-4 md-px-0 text-lg md-text-2xl mb-12 leading-normal text-center max-w-md mx-auto">
            We rewrite the equations to our clients’ problems, so we can create different
            solutions than everyone else. We employ talent that looks for answers in
            unlikely places. Our people and the culture we’ve made together brings
            unexpected thinking to all our clients’ challenges.
          </p>
          <p className="mb-8 font-sans text-white tracking-normal text-xl mb-12 leading-normal text-center max-w-md mx-auto font-bold">
            Take a look at who we are:
          </p>
          <img
            src="http://via.placeholder.com/995x560"
            alt=""
            className="block mx-auto mb-4"
          />
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
            src={Illustration}
            alt=""
          />
        </section>
        <section className="values-section max-w-2xl px-4 md-pd-0 mx-auto pb-16">
          <h2 className="uppercase text-black text-center text-4-5xl mb-32">
            The values that align us.
          </h2>
          <ul className="flex flex-col md-flex-row flex-wrap list-reset text-center">
            {values}
          </ul>
          <img src={Caret} alt="" className="block my-16 mx-auto" />
        </section>
        <section className="benefits-section bg-grey pt-32">
          <h2 className="text-black uppercase text-4-5xl text-center max-w-md mx-auto mb-4">
            Our Agency Culture is Authentically Cultivated.
          </h2>
          <h3 className="text-grey text-lg md-text-2xl font-semibold text-grey-darker text-center mb-20 px-4">
            Building a unique work environment takes a team effort.
          </h3>
          <div className="mx-auto max-w-xl px-4 md-px-0">
            <ul className="flex flex-col md-flex-row md-flex-wrap -mx-4 px-8 md-px-4 lg-px-0">
              {benefits}{' '}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
