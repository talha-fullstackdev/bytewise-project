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
  return (
    <div className='flex gap-14'>
       {data.map((item)=>(
        <div className="text-white flex flex-col gap-6">
               <p className='font-bold'>{item.heading}</p>
               <ul className="flex flex-col gap-2 text-sm">
                <li>{item.item1}</li>
                <li>{item.item2}</li>
                <li>{item.item3}</li>
                <li>{item.item4}</li>
                <li>{item.item5}</li>
               </ul>
        </div>
       ))}
    </div>
  )
}

export default FooterNavigation