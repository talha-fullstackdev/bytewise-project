import React from 'react'
import FooterLogo from './FooterLogo'
import FooterNavigation from './FooterNavigation'
import FooterMail from './FooterMail'
import AnimatedWrapper from "../../hooks/AnimatedWrapper.jsx";

const Footer = () => {
  return (
    <AnimatedWrapper>
    <div className='bg-[#263238] flex flex-col pb-10 pt-10 flex-wrap md:flex-row md:justify-around gap-10 items-center p-4 md:pb-20 md:pt-10'>
        <FooterLogo/>
        <FooterNavigation/>
        <FooterMail/>
    </div>
    </AnimatedWrapper>
  )
}

export default Footer