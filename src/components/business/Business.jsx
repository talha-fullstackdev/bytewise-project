import React from 'react'
import BusinessPara from './BusinessPara'
import Member from './Member'
import AnimatedWrapper from "../../hooks/AnimatedWrapper.jsx";

const Business = () => {
  return (
    <AnimatedWrapper>
    <div className='flex flex-col md:flex-row justify-evenly bg-gray-100 p-10 mt-10'>
        <BusinessPara/>
        <Member/>
    </div>
    </AnimatedWrapper>
  )
}

export default Business