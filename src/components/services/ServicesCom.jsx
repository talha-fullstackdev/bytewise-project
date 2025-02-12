import React from "react";
import data from "./data";
const ServicesCom = () => {
  return (
    <div className="px-6 py-4">
      <p className="text-center text-3xl  text-slate-500 md:font-bold font-semibold mb-6">
        Services
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:px-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-start text-left"
          >
            <div className="w-full flex justify-center">
              <img src={item.image} alt={item.name} className="object-cover mb-4" />
            </div>
            <p className="text-xl md:text-2xl font-semibold text-slate-500">
              {item.name}
            </p>
            <p className="text-gray-600 text-sm md:text-xl mt-2">{item.para}</p>

            <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition">
              See more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCom;
