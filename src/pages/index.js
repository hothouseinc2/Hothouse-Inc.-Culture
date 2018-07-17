import WelcomeSection from '../components/WelcomeSection'
import Footer from '../components/Footer'

import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <WelcomeSection />
        <Footer />
      </div>
    )
  }
}
