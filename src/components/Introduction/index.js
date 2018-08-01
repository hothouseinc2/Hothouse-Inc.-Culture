import React, { Component } from 'react'
import Logo from '../../images/hothouse-logo.svg'

import TopClouds from '../../images/mission/top-clouds.svg'

export default class Introduction extends Component {
  render() {
    let { edges } = this.props.data
    let header = edges.filter(i => i.node.frontmatter.id === 'header')[0].node.frontmatter

    let video = {
      __html: `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src=${
        header.video
      } style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`
    }
    return (
      <React.Fragment>
        <header ref="introduction">
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
            <div className="max-w-xl mx-auto" dangerouslySetInnerHTML={video} />
          </div>
        </header>
      </React.Fragment>
    )
  }
}
