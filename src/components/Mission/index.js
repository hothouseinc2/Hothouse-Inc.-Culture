import React, { Component } from 'react'
import MtnIllustration from '../../images/mission/bottom-illustration.svg'
import MiddleClouds from '../../images/mission/middle-clouds.svg'

export default class Mission extends Component {
  render() {
    return (
      <section className="mission-section mt-64">
        <div className="relative">
          <img
            className="mission-section__middle-clouds center-absolute"
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
          We rewrite the equations to our clients’ problems, so we can create different
          solutions than everyone else. We look for answers in unlikely places and bring
          unexpected thinking to all our clients’ challenges.{' '}
        </p>
        <img
          className="max-w-3xl px-4 block mx-auto pb-8 w-full"
          src={MtnIllustration}
          alt=""
        />
      </section>
    )
  }
}