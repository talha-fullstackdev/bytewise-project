// // import React from 'react'
// // import logo from "../../assets/company/Logo.png"
// // import logo1 from "../../assets/company/Logo-1.png"
// // import logo2 from "../../assets/company/Logo-2.png"
// // import logo3 from "../../assets/company/Logo-3.png"
// // import logo4 from "../../assets/company/Logo-4.png"
// // import logo5 from "../../assets/company/Logo-5.png"
// // import { IoIosArrowRoundForward } from "react-icons/io";

// // const TeslaDetails = () => {
// //     const icons=[logo,logo1,logo2,logo3,logo4,logo5]
// //   return (
// //     <div className=''>
// //         <div className="w-[300px] m-auto text-sm flex flex-col gap-3">
// //         <p >
// //         Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
// //         <p className='text-green-400'>Tim Smith</p>
// //         <p>British Dragon Boat Racing Association</p>
// //         </div>
// //         <div className="flex">
// //             <div className="flex gap-2">
// //         {icons.map((icon, index) => (
// //           <img
// //             key={index}
// //             src={icon}
// //             alt={`Company Logo ${index + 1}`}
// //             className="w-10 md:w-24 h-auto"
// //           />
// //         ))}
// //         </div>
// //         <div className="">
// //            <button>Meet all customers </button>
// //             <span><IoIosArrowRoundForward/></span>
// //            </div>

// //         </div>
// //     </div>
// //   )
// // }

// // export default TeslaDetails
// // import React from 'react';
// // import logo from "../../assets/company/Logo.png";
// // import logo1 from "../../assets/company/Logo-1.png";
// // import logo2 from "../../assets/company/Logo-2.png";
// // import logo3 from "../../assets/company/Logo-3.png";
// // import logo4 from "../../assets/company/Logo-4.png";
// // import logo5 from "../../assets/company/Logo-5.png";
// // import { IoIosArrowRoundForward } from "react-icons/io";

// // const TeslaDetails = () => {
// //   const icons = [logo, logo1, logo2, logo3, logo4, logo5];

// //   return (
// //     <div className="px-6  py-8">
// //       {/* Text Section */}
// //       <div className="max-w-md md:max-w-2xl lg:max-w-3xl mx-auto text-center md:text-left text-gray-700">
// //         <p className="text-sm md:text-base leading-relaxed">
// //           Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
// //           sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
// //           Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
// //           molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
// //           molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
// //           ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
// //           turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
// //           sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
// //           neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
// //           dignissim finibus ac sit amet magna.
// //         </p>
// //         <p className="text-green-500 font-semibold mt-4 text-sm md:text-base">
// //           Tim Smith
// //         </p>
// //         <p className="text-gray-500 text-sm">British Dragon Boat Racing Association</p>
// //       </div>

// //       {/* Logos & Button Section */}
// //       <div className="mt-6 flex flex-wrap flex-col md:flex-row items-center justify-between">
// //         {/* Logos */}
// //         <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-12">
// //           {icons.map((icon, index) => (
// //             <img
// //               key={index}
// //               src={icon}
// //               alt={`Company Logo ${index + 1}`}
// //               className="w-10 md:w-12 h-auto"
// //             />
// //           ))}
// //         </div>

// //         {/* Button */}
// //         <button className="mt-6 md:mt-0 flex items-center gap-2 text-green-500 font-medium hover:text-green-700 transition">
// //           Meet all customers <IoIosArrowRoundForward size={24} />
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TeslaDetails;
import React from 'react';
import logo from "../../assets/company/Logo.png";
import logo1 from "../../assets/company/Logo-1.png";
import logo2 from "../../assets/company/Logo-2.png";
import logo3 from "../../assets/company/Logo-3.png";
import logo4 from "../../assets/company/Logo-4.png";
import logo5 from "../../assets/company/Logo-5.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const TeslaDetails = () => {
  const icons = [logo, logo1, logo2, logo3, logo4, logo5];

  return (
    <div className="px-6 py-12 md:mr-20">
      {/* Text Section */}
      <div className="max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto text-center md:text-left text-gray-700">
        <p className="text-base md:text-lg leading-relaxed text-gray-600">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <p className="text-green-600  mt-4 text-base font-bold">
          Tim Smith
        </p>
        <p className="text-gray-500 text-sm">British Dragon Boat Racing Association</p>
      </div>

      {/* Logos & Button Section */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logos */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10">
          {icons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt={`Company Logo ${index + 1}`}
              className="w-12 md:w-14 h-auto"
            />
          ))}
        </div>

        {/* Button */}
        <button className="mt-6 md:mt-0 flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-all duration-300 ease-in-out">
          Meet all customers 
          <IoIosArrowRoundForward size={26} />
        </button>
      </div>
    </div>
  );
};

export default TeslaDetails;
