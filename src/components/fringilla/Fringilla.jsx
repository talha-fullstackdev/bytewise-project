import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

const Fringilla = () => {
  return (
    <div className='bg-gray-100 px-4 py-10 md:py-20'>
      <div className="text-center">
        <p className='text-2xl sm:text-3xl md:text-4xl md:w-[400px] md:m-auto font-semibold text-[#4D4D4D]'>
          Pellentesque suscipit fringilla libero eu.
        </p>
        <div className="flex items-center justify-center  mt-4 md:mt-6 bg-[#45d449] hover:bg-[#4be751] w-[200px] md:w-[200px] m-auto py-1 md:py-3 px-2 md:px-6 text-gray-800 font-semibold rounded-lg cursor-pointer">
          <button className="text-lg sm:text-xl py-2 text-gray-100">Get a demo</button>
          <span className="text-2xl mt-1 ml-2 text-gray-100 ">
            <IoIosArrowRoundForward />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Fringilla;