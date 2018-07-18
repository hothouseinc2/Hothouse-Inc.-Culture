import React, { Component } from 'react'
import Link from 'gatsby-link'
import Logo from '../../images/hothouse-logo.svg'
import Caret from '../../images/caret.svg'
import Values1 from '../../images/values/icon-values-1.svg'
import Values2 from '../../images/values/icon-values-2.svg'
import Values3 from '../../images/values/icon-values-3.svg'
import Values4 from '../../images/values/icon-values-4.svg'
import Values5 from '../../images/values/icon-values-5.svg'
import Values6 from '../../images/values/icon-values-6.svg'
import Illustration from '../../images/mission/bottom-illustration.svg'
import MiddleClouds from '../../images/mission/middle-clouds.svg'
import HappyTogether from '../../images/benefits/benefits-happy-together.jpg'
import WorkLife from '../../images/benefits/benefits-work-life-balance.jpg'
import Oppotunities from '../../images/benefits/benefits-oppotunities.jpg'
import LifeLong from '../../images/benefits/benefits-life-long-learning.jpg'

export default class WelcomeSection extends Component {
  render() {
    return (
      <div className="welcome-section bg-welcome-gradient pt-32">
        <header>
          <img src={Logo} alt="" className="block mx-auto mb-12" />
          <h1 className="uppercase text-white text-4-5xl text-center">
            Hi, we're Hothouse.
          </h1>
          <p className="font-sans text-white px-4 md-px-0 text-xl md-text-2xl mb-12 leading-normal text-center max-w-md mx-auto">
            We rewrite the equations to our clients’ problems, so we can create different
            solutions than everyone else. We employ talent that looks for answers in
            unlikely places. Our people and the culture we’ve made together brings
            unexpected thinking to all our clients’ challenges.
          </p>
          <p className="mb-8 font-sans text-white text-xl mb-12 leading-normal text-center max-w-md mx-auto font-bold">
            Take a look at who we are:
          </p>
          <img
            src="http://via.placeholder.com/995x560"
            alt=""
            className="block mx-auto mb-4"
          />
        </header>
        <img src={Caret} alt="" className="block mt-16 mb-32 mx-auto" />
        <section className="mission-section">
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
              <div className="text-4xl font-normal">
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
          <ul className="flex flex-col md-flex-row flex-wrap list-reset text-center mb-48">
            <li className="w-full md-w-1-2 lg-w-1-3 mb-32">
              <div>
                <div className="mb-8 w-64 h-64 relative mx-auto">
                  <img className="absolute" src={Values1} alt="" />
                </div>
                <div className="max-w-xs mx-auto">
                  <h3 className="mb-4 uppercase text-black-light text-3xl font-medium">
                    Test Heading
                  </h3>
                  <p className="text-lg md-text-xl text-black-lighter leading-tight">
                    Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur
                    tacimates cu mei, at posse luptatum.
                  </p>
                </div>
              </div>
            </li>
            <li className="w-full md-w-1-2 lg-w-1-3 mb-32">
              <div>
                <div className="mb-8 w-64 h-64 relative mx-auto">
                  <img className="absolute" src={Values2} alt="" />
                </div>
                <div className="max-w-xs mx-auto">
                  <h3 className="mb-4 uppercase text-black-light text-3xl font-medium">
                    Test Heading
                  </h3>
                  <p className="text-lg md-text-xl text-black-lighter leading-tight">
                    Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur
                    tacimates cu mei, at posse luptatum.
                  </p>
                </div>
              </div>
            </li>
            <li className="w-full md-w-1-2 lg-w-1-3 mb-32">
              <div>
                <div className="mb-8 w-64 h-64 relative mx-auto">
                  <img className="absolute" src={Values3} alt="" />
                </div>
                <div className="max-w-xs mx-auto">
                  <h3 className="mb-4 uppercase text-black-light text-3xl font-medium">
                    Test Heading
                  </h3>
                  <p className="text-lg md-text-xl text-black-lighter leading-tight">
                    Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur
                    tacimates cu mei, at posse luptatum.
                  </p>
                </div>
              </div>
            </li>
            <li className="w-full md-w-1-2 lg-w-1-3 mb-32">
              <div>
                <div className="mb-8 w-64 h-64 relative mx-auto">
                  <img className="absolute" src={Values4} alt="" />
                </div>
                <div className="max-w-xs mx-auto">
                  <h3 className="mb-4 uppercase text-black-light text-3xl font-medium">
                    Test Heading
                  </h3>
                  <p className="text-lg md-text-xl text-black-lighter leading-tight">
                    Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur
                    tacimates cu mei, at posse luptatum.
                  </p>
                </div>
              </div>
            </li>
            <li className="w-full md-w-1-2 lg-w-1-3 mb-32">
              <div>
                <div className="mb-8 w-64 h-64 relative mx-auto">
                  <img className="absolute" src={Values5} alt="" />
                </div>
                <div className="max-w-xs mx-auto">
                  <h3 className="mb-4 uppercase text-black-light text-3xl font-medium">
                    Test Heading
                  </h3>
                  <p className="text-lg md-text-xl text-black-lighter leading-tight">
                    Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur
                    tacimates cu mei, at posse luptatum.
                  </p>
                </div>
              </div>
            </li>
            <li className="w-full md-w-1-2 lg-w-1-3 mb-32">
              <div>
                <div className="mb-8 w-64 h-64 relative mx-auto">
                  <img className="absolute" src={Values6} alt="" />
                </div>
                <div className="max-w-xs mx-auto">
                  <h3 className="mb-4 uppercase text-black-light text-3xl font-medium">
                    Test Heading
                  </h3>
                  <p className="text-lg md-text-xl text-black-lighter leading-tight">
                    Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur
                    tacimates cu mei, at posse luptatum.
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <img src={Caret} alt="" className="block my-16 mx-auto" />
        </section>
        <section className="benefits-section bg-grey pt-32">
          <h2 className="text-black uppercase text-4-5xl text-center max-w-md mx-auto mb-4">
            Our Agency Culture is Authentically Cultivated.
          </h2>
          <h3 className="text-grey text-2xl font-semibold text-grey-darker text-center mb-20">
            Building a unique work environment takes a team effort.
          </h3>

          <ul className="flex flex-col md-flex-row md-flex-wrap max-w-2xl mx-auto">
            <li className="relative w-120 h-120 max-w-full list-reset mx-auto md-w-1-2">
              <div className="absolute z-0">
                <img className="max-w-full" src={HappyTogether} alt="" />
              </div>
              <div className="relative z-20 tile-transparent hothouse">
                <h4>Untapped Opportunities</h4>
              </div>
            </li>
            <li className="relative w-120 h-120 list-reset mx-auto md-w-1-2">
              <div className="absolute z-0">
                <img className="max-w-full" src={WorkLife} alt="" />
              </div>
              <div className="relative z-20 tile-transparent pink">
                <h4>Work - Life Balance</h4>
              </div>
            </li>
            <li className="relative w-120 h-120 list-reset mx-auto md-w-1-2">
              <div className="absolute z-0">
                <img className="max-w-full" src={Oppotunities} alt="" />
              </div>
              <div className="relative z-20 tile-transparent orange">
                <h4>Lifelong Learning</h4>
              </div>
            </li>
            <li className="relative w-120 h-120 list-reset mx-auto md-w-1-2">
              <div className="absolute z-0">
                <img className="max-w-full" src={LifeLong} alt="" />
              </div>
              <div className="relative z-20 tile-transparent blue">
                <h4>Happy Together</h4>
              </div>
            </li>
          </ul>
        </section>
      </div>
    )
  }
}
