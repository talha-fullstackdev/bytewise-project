import React from 'react'
import Image from "../../assets/about.svg"
const AboutCom = () => {
  return (
    <div className='flex flex-col mt-10 px-10 md:flex-row md:items-center md:justify-evenly md:flex-wrap'>
        <div className="md:max-w-[600px] md:pl-10">
            <p className='text-[#4D4D4D] font-semibold text-lg md:text-4xl'>Welcome to About Page</p>
            <p className='text-sm mt-4 md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cupiditate iste doloribus, sit quaerat consequatur consectetur repudiandae sunt perferendis dicta debitis animi, at pariatur, veniam assumenda sint. Doloremque repellat explicabo deleniti sit libero ut quidem fuga enim cupiditate, voluptas,ejudh accusantium aperiam quaerat, eos consectetur error. Nihil delectus tenetur fdsfsint aballaboriosam nemo voluptatibus.</p>
            <button className='mt-4 ml-24 md:ml-0 bg-[#45d449] hover:bg-[#4be751]  py-1 px-2 md:py-2 md:px-2 text-gray-100 rounded-md'>Contact Now</button>
        </div>
        <div className="mt-4 p-4 md:w-[600px]">
            <img src={Image} alt="about-image" />
        </div>
    </div>
  )
}

export default AboutCom
