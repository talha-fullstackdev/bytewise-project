import React from 'react'
import { FaSquareWebAwesome } from "react-icons/fa6";

const PricingPage = () => {
  const data =[
    {
     icon:<FaSquareWebAwesome />,
     name:"Web development",
     price:"$29",
     about:"we have the exciting discounts for you"
    },
    {
     icon:<FaSquareWebAwesome />,
     name:"Android development",
     price:"$39",
     about:"we have the exciting discounts for you"
    },
    {
     icon:<FaSquareWebAwesome />,
     name:"Designing",
     price:"$20",
     about:"we have the exciting discounts for you"
    },
  ]
  return (
    <div>
      <p>Find the plan that's right for you</p>
      <div className="">
        {data.map((item)=>(
          <>
          <img src={item.icon} alt="" />
          <p>{item.name}</p>
          <p>{item.about}</p>
          <p>{item.price}</p>
          <button>BUY NOW</button>
          </>
        ))}
      </div>
    </div>
  )
}

export default PricingPage