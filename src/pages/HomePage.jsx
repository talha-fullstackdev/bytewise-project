import React from 'react'
import Hero from '../components/hero/Hero'
import OurClients from '../components/ourclients/OurClients'
import Membership from '../components/membership/Membership'
import PixelGrade from '../components/PixelGrade/PixelGrade'
import Business from '../components/business/Business'
import Design from '../components/design/Design'
const HomePage = () => {
  return (
    <>
      <Hero/>
      <OurClients/>
      <Membership/>
      <PixelGrade/>
      <Business/>
      <Design/>
    </>
  )
}

export default HomePage