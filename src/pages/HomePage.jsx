import React from 'react'
import Hero from '../components/hero/Hero'
import OurClients from '../components/ourclients/OurClients'
import Membership from '../components/membership/Membership'
import PixelGrade from '../components/PixelGrade/PixelGrade'
import Business from '../components/business/Business'
import Design from '../components/design/Design'
import Tesla from '../components/tesla/Tesla'
import Marketing from '../components/marketing/Marketing'
import Fringilla from "../components/fringilla/Fringilla.jsx"
import Footer from '../components/footer/Footer.jsx'
const HomePage = () => {
  return (
    <>
      <Hero/>
      <OurClients/>
      <Membership/>
      <PixelGrade/>
      <Business/>
      <Design/>
      <Tesla/>
      <Marketing/>
      <Fringilla/>
      <Footer/>
    </>
  )
}

export default HomePage