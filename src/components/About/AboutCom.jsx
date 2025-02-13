import React from 'react'
import Image from "../../assets/about.svg"
import AnimatedWrapper from "../../hooks/AnimatedWrapper.jsx";

const AboutCom = () => {
  return (
    <AnimatedWrapper>
    <div className='flex flex-col mt-10 md:mt-8 px-10 md:flex-row md:items-center md:justify-evenly md:flex-wrap'>
        <div className="md:max-w-[580px] md:pl-10">
            <p className='text-slate-500 font-semibold text-lg md:text-4xl'>Welcome to About Page</p>
            <p className='text-sm mt-4 md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cupiditate iste doloribus, sit quaerat consequatur consectetur repudiandae sunt perferendis dicta debitis animi, at pariatur, veniam assumenda sint. Doloremque repellat explicabo deleniti sit libero ut quidem fuga enim cupiditate, voluptas,ejudh accusantium aperiam quaerat, eos consectetur error. Nihil delectus tenetur fdsfsint aballaboriosam nemo voluptatibus.</p>
            <button className='mt-4  bg-[#45d449] hover:bg-[#4be751]  py-1 px-2 md:py-2 md:px-2 text-gray-100 rounded-md'>Contact Now</button>
        </div>
        <div className="mt-4md:mt-0 p-4 md:min-w-[500px]">
            <img src={Image} alt="about-image" />
        </div>
    </div>
    </AnimatedWrapper>
  )
}

export default AboutCom
