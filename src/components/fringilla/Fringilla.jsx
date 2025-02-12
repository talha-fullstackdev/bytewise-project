import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Fringilla = () => {
  return (
    <div className='bg-gray-100'>
        <div className="p-20 text-center">
            <p className='text-4xl md:w-[400px] md:m-auto md:font-semibold text-[#4D4D4D]'>Pellentesque suscipit fringilla libero eu.</p>
            <div className="flex items-center justify-center mt-2 bg-[#45d449] hover:bg-[#4be751] w-[130px] md:m-auto md:mt-6 py-2 text-gray-800 font-semibold">
            <button>Get a demo</button>
            <span><IoIosArrowRoundForward />
            </span>
            </div>
        </div>
    </div>
  )
}

export default Fringilla