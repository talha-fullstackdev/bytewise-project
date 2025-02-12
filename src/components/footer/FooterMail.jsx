
import React from 'react';
import { FaLocationArrow } from "react-icons/fa6";

const FooterMail = () => {
  return (
    <div className=" flex flex-col gap-2">
      <p className="text-white">Stay up to date</p>
      {/* Container for input and icon */}
      <div className="flex items-center bg-[#38474d] rounded-md p-2">
        {/* Input with removed default styles */}
        <input 
          type="email"
          placeholder="Your email address"
          className="bg-transparent outline-none text-white flex-1 px-2 placeholder-gray-300"
        />
        {/* Icon inside the input div */}
        <span className="text-white cursor-pointer">
          <FaLocationArrow />
        </span>
      </div>
    </div>
  );
};

export default FooterMail;
