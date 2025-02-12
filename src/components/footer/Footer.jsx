import React from 'react'
import FooterLogo from './FooterLogo'
import FooterNavigation from './FooterNavigation'
import FooterMail from './FooterMail'
const Footer = () => {
  return (
    <div className='bg-[#263238] flex flex-col gap-10 items-center p-4'>
        <FooterLogo/>
        <FooterNavigation/>
        <FooterMail/>
    </div>
  )
}

export default Footer