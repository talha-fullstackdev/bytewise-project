import React from 'react'
import Hero from '../components/hero/Hero'
import OurClients from '../components/ourclients/OurClients'
import Membership from '../components/membership/Membership'
import PixelGrade from '../components/PixelGrade/PixelGrade'
import Business from '../components/business/Business'
const HomePage = () => {
  return (
    <div className=''>
      <Hero/>
      <OurClients/>
      <Membership/>
      <PixelGrade/>
      <Business/>
    </div>
  )
}

export default HomePage