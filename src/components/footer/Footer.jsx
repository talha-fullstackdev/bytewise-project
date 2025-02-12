import React from 'react'
import FooterLogo from './FooterLogo'
import FooterNavigation from './FooterNavigation'
import FooterMail from './FooterMail'
const Footer = () => {
  return (
    <div className='bg-[#263238]'>
        <FooterLogo/>
        <FooterNavigation/>
        <FooterMail/>
    </div>
  )
}

export default Footer