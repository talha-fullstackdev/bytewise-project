import React from 'react'
const FooterNavigation = () => {
    const data = [
        {
            heading:"Company",
            item1: "About us",
            item2: "Blog",
            item3: "Contact us",
            item4: "Pricing",
            item5: "Testimonials",
        },
        {
            heading:"Support",
            item1: "Help center",
            item2: "Terms of service",
            item3: "Legal",
            item4: "Privacy policy",
            item5: "Status",
        },
    ]
    const liStyling = "hover:underline-offset-4 hover:text-[#4be751] hover:underline"
  return (
    <div className='flex gap-20 md:mt-10'>
       {data.map((item,index)=>(
        <div key={index} className="text-white flex flex-col gap-6 cursor-pointer ">
               <p className={`font-bold md:text-xl md:font-semibold ${liStyling}`}>{item.heading}</p>
               <ul className="flex flex-col gap-2 text-sm md:text-lg ">
                <li className={liStyling}>{item.item1}</li>
                <li className={liStyling}>{item.item2}</li>
                <li className={liStyling}>{item.item3}</li>
                <li className={liStyling}>{item.item4}</li>
                <li className={liStyling}>{item.item5}</li>
               </ul>
        </div>
       ))}
    </div>
  )
}

export default FooterNavigation