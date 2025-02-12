import React from "react";
import { RxAvatar } from "react-icons/rx";
import { PiHandshakeDuotone } from "react-icons/pi";
import { TbHandMove } from "react-icons/tb";
import { IoMdCard } from "react-icons/io";

const Member = () => {
    const data = [
        {
         icon: <RxAvatar />         ,
         value:"2,245,341",
         name:"Members",
        },
        {
         icon: <PiHandshakeDuotone />         ,
         value:"46,328",
         name:"Clubs",
        },
        {
         icon: <TbHandMove />         ,
         value:"828,867",
         name:"Event Bookings",
        },
        {
         icon: <IoMdCard />         ,
         value:"1,926,436",
         name:"Payments",
        },
    ]
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ml-12 mt-8 md:m-0">
      {data.map((item)=>(
        <div className="flex items-center gap-12 m-auto w-[250px] " key={item.value}>
            <span className="text-[#45d449] text-3xl md:text-4xl">{item.icon}</span>
            <div className="flex flex-col gap-1">
                <p className="text-1xl md:text-2xl font-bold text-[#4D4D4D]">{item.value}</p>
                <p className="text-md text-[#4D4D4D]">{item.name}</p>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Member;

