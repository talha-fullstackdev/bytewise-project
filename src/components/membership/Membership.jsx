import React from "react";
import data from "./data/data";
import AnimatedWrapper from "../../hooks/AnimatedWrapper.jsx";

const Membership = () => {
  return (
    <AnimatedWrapper>
    <div className="mt-10 px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-full max-w-[350px] p-6 rounded-lg shadow-md shadow-gray-300 bg-white"
          >
            <div className="relative flex items-center justify-center w-16 h-16">
              <div className="absolute left-[25px] bg-[#cae9cc] w-14 h-16 rounded-md rounded-tl-[30px] rounded-br-[30px]"></div>
              <img src={item.logo} alt="logo" className="w-14 h-14 relative" />
            </div>

            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#4D4D4D] mt-4">
              {item.heading}
            </p>

            <p className="text-gray-500 text-base md:text-lg mt-2 leading-relaxed">
              {item.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
    </AnimatedWrapper>
  );
};

export default Membership;
