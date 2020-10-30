import React from 'react'
import base from './base.css'
import Container from '../components/container'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Container>
        <Navigation />
        {children}
        <Footer />
      </Container>
    )
  }
}

export default Template
