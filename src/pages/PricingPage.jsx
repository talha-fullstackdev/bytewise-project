
import React from "react";
import { FaSquareWebAwesome } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";
import { SiAdobexd } from "react-icons/si";

const PricingPage = () => {
  const data = [
    {
      icon: <FaSquareWebAwesome />,
      name: "Web Development",
      price: "$29",
      about: "We have exciting discounts for you!",
    },
    {
      icon: <IoLogoAndroid />,
      name: "Android Development",
      price: "$39",
      about: "We have exciting discounts for you!",
    },
    {
      icon: <SiAdobexd />,
      name: "Designing",
      price: "$20",
      about: "We have exciting discounts for you!",
    },
  ];

  return (
    <div className="px-6 md:px-20 py-4">
      {/* Page Title */}
      <p className="text-center text-3xl font-bold text-gray-700 mb-6">
        Find the plan that's right for you
      </p>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 h-[400px] md:h-[400px] flex flex-col items-center text-center border border-gray-200"
          >
            {/* Icon */}
            <div className="text-5xl text-slate-600 mb-6">{item.icon}</div>

            {/* Plan Name */}
            <p className="text-2xl font-semibold text-slate-600">{item.name}</p>

            {/* Description */}
            <p className="text-gray-600 mt-3 px-4">{item.about}</p>

            {/* Price */}
            <p className="text-3xl font-bold text-slate-600 mt-10 mb-6">
              {item.price}
            </p>

            {/* Buy Now Button */}
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition w-full max-w-[200px]">
              BUY NOW
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
