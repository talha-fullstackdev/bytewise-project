
import React from "react";
import heroImage from "../../assets/hero/hero-poster.svg";
const Hero = () => {
  return (
    <div className="  bg-gray-100 flex flex-col items-center py-10 px-4 text-center md:flex-row md:justify-around md:text-left">

      <section className="flex flex-col items-center gap-4 max-w-md md:max-w-lg md:items-start w-full md:w-auto ">
        <h1 className="text-gray-700 font-semibold text-xl md:text-5xl md:max-w-[700px] leading-tight">
          Lessons and insights <br className="hidden md:block" />
          <span className="text-[#45d449] ">from 8 years</span>
        </h1>
        <p className="text-gray-600 text-md md:text-xl max-w-[300px] md:max-w-full">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className="bg-[#45d449] hover:bg-[#4be751]  text-[14px] md:text-[18px] text-white px-6 py-2 rounded-md shadow-md  transition duration-300 md:px-8 md:py-4 md:mt-6">
          Register
        </button>
      </section>

      <img className="w-[250px] md:w-[350px] mt-12 " src={heroImage} alt="hero image" />
    </div>
  );
};

export default Hero;
