import React from 'react'
import Hero from '../components/hero/Hero'
import OurClients from '../components/ourclients/OurClients'
import Membership from '../components/membership/Membership'
const HomePage = () => {
  return (
    <div className=''>
      <Hero/>
      <OurClients/>
      <Membership/>
    </div>
  )
}

export default HomePage