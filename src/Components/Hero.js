import React from 'react'
import AboutUs from './AboutUs'
import Founder from './Founder'
import Header from './Header'
import Main from './Main'
import Interested from './Interested'
import Footer from './Footer'

const Hero = () => {
  return (
    <div>
      <div className='heroOverlay'></div>
      <div className='hero-img'></div>
      <Header />
       <Main />
      <AboutUs />
      <Founder />
      <Interested />
      <Footer />
    </div>
  )
}

export default Hero
