import React, { Component } from 'react'
import Link from 'gatsby-link'
import Logo from '../../images/hothouse-logo.svg'
import Caret from '../../images/caret.svg'
import Values1 from '../../images/values/icon-values-1.svg'
import Values2 from '../../images/values/icon-values-2.svg'

export default class WelcomeSection extends Component {
  render() {
    return (
      <div className="welcome-section bg-welcome-gradient pt-32">
        <header>
          <img src={Logo} alt="" className="block mx-auto mb-12" />
          <h1 className="uppercase text-white text-4-5xl text-center">
            Hi, we're Hothouse.
          </h1>
          <p className="font-sans text-white text-2xl mb-12 leading-normal text-center max-w-md mx-auto">
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
        <img src={Caret} alt="" className="block my-16 mx-auto" />
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
          </ul>
          <img src={Caret} alt="" className="block my-16 mx-auto" />
        </section>
      </div>
    )
  }
}
