import React, { Component } from 'react'
import bg from '../../images/footer/illustration.png'
import logo from '../../images/footer/logo-hothouse.svg'
import Facebook from '../../images/footer/icon-facebook.svg'
import Twitter from '../../images/footer/icon-twitter.svg'
import Instagram from '../../images/footer/icon-instagram.svg'
import Spotify from '../../images/footer/icon-spotify.svg'
import LinkedIn from '../../images/footer/icon-linkedin.svg'
import SVG from 'react-inlinesvg'

export default class Footer extends Component {
  render() {
    return (
      <footer
        className="pt-32 h-156 bg-blue"
        style={{
          backgroundImage: 'url(' + bg + ')',
          backgroundSize: 'auto',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="text-white flex justify-center items-center flex-col leading-normal">
          <img src={logo} alt="" className="mx-auto block mb-4" />
          <address className="text-center roman">
            621 North Ave NE, Suite A-100 | Atlanta, GA 30308
          </address>
          <a
            className="text-white text-center block no-underline hover-underline"
            href="tel:404-223-5100"
          >
            (404) 223-5100
          </a>
          <a
            href="http://hothouseinc.com"
            className="font-bold text-white text-2xl mt-10 no-underline hover-underline mb-6"
          >
            hothouseinc.com
          </a>
          <ul className="list-reset flex justify-between max-w-xs w-full px-4 md-px-0">
            <li className="">
              <a href="https://www.facebook.com/hothouseinc" target="_blank">
                <SVG src={Facebook}>
                  <img src={Facebook} />
                </SVG>
              </a>
            </li>
            <li className="">
              <a href="https://twitter.com/HothouseInc" target="_blank">
                <SVG src={Twitter}>
                  <img src={Twitter} />
                </SVG>
              </a>
            </li>
            <li className="">
              <a href="https://www.instagram.com/hothouseinc/" target="_blank">
                <SVG src={Instagram}>
                  <img src={Instagram} />
                </SVG>
              </a>
            </li>
            <li className="">
              <a
                href="https://open.spotify.com/user/1214240720/playlist/1FyHZlJszVon7dMWOKkn1D"
                target="_blank"
              >
                <SVG src={Spotify}>
                  <img src={Spotify} />
                </SVG>
              </a>
            </li>
            <li className="">
              <a href="https://www.linkedin.com/company/hothouse-inc-/" target="_blank">
                <SVG src={LinkedIn}>
                  <img src={LinkedIn} />
                </SVG>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
}
