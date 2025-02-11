import React from 'react'
import BusinessPara from './BusinessPara'
import Member from './Member'
const Business = () => {
  return (
    <div className='flex flex-col md:flex-row justify-evenly bg-gray-100 p-10 mt-10'>
        <BusinessPara/>
        <Member/>
    </div>
  )
}

export default Business