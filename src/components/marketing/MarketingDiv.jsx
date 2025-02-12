// import React from 'react'
// import Image1 from "../../assets/market1.png"
// import Image2 from "../../assets/market2.png"
// import Image3 from "../../assets/market2.png"
// import { IoIosArrowRoundForward } from "react-icons/io";

// const MarketingDiv = () => {
//     const data =[
//         {
//             image:Image1,
//             text:"Creating Streamlined Safeguarding Processes with OneRen"
//         },
//         {
//             image:Image2,
//             text:"What are your safeguarding responsibilities and how can you manage them?"
//         },
//         {
//             image:Image3,
//             text:"Revamping the Membership Model with Triathlon Australia"
//         },
//     ]
//   return (
//     <div className='flex gap-12 pl-20 mt-10'>
//          {data.map((item)=>(
//             <div className="">
//                 <img src={item.image} alt="" />
//                 <div className="w-[200px] rounded-md text-[#4D4D4D] font-semibold border relative bottom-16 bg-gray-100 left-20 p-4 text-md">
//                     <p>{item.text}</p>
//                     <div className="flex items-center gap-2 mt-2 text-green-400 font-bold">
//                     <button className=''>Read More</button> 
//                     <span className=''><IoIosArrowRoundForward /></span>
//                     </div>
//                 </div>
//             </div>
//          ))}
//     </div>
//   )
// }

// export default MarketingDiv
import React from 'react';
import Image1 from "../../assets/market1.png";
import Image2 from "../../assets/market2.png";
import Image3 from "../../assets/market2.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const MarketingDiv = () => {
  const data = [
    {
      image: Image1,
      text: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      image: Image2,
      text: "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      image: Image3,
      text: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  return (
    <div className="mt-10 flex flex-col md:flex-row  md:gap-12 items-center justify-center">
      {data.map((item, index) => (
        <div key={index} className="relative w-[260px] md:w-auto">
          {/* Image */}
          <img className="w-full md:w-auto" src={item.image} alt="Marketing Image" />
          
          {/* Text Card */}
          <div className="w-[150px] md:w-[200px] rounded-md text-[#4D4D4D] font-semibold border relative md:bottom-16 bottom-16 bg-gray-100 md:left-20 left-16 p-4 text-sm md:text-md ">
            <p>{item.text}</p>
            <div className="flex items-center gap-2 mt-2 text-green-400 font-bold">
              <button>Read More</button> 
              <span><IoIosArrowRoundForward /></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketingDiv;
