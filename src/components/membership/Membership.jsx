// import React from "react";
// import data from "./data/data";

// const Membership = () => {
//   return (
//     <div className="mt-10 flex flex-col items-center gap-10 md:flex-row md:justify-around">
//       {data &&
//         data.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center w-[350px] p-6 rounded-lg shadow-md shadow-gray-300"
//           >
//             {/* Icon with Background */}
//             <div className="relative flex items-center justify-center">
//               <div className="absolute left-[20px] bg-[#cae9cc]    w-14 h-16 rounded-md rounded-tl-[30px] rounded-br-[30px]"></div>
//               <img src={item.logo} alt="logo" className="w-14 h-14 relative" />
//             </div>

//             {/* Heading */}
//             <p className="text: md:text-4xl font-bold md:font-semibold text-[#4D4D4D] mt-4">
//               {item.heading}
//             </p>

//             {/* Description */}
//             <p className="text-gray-500 text-lg mt-2 leading-relaxed">
//               {item.paragraph}
//             </p>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default Membership;

import React from "react";
import data from "./data/data";

const Membership = () => {
  return (
    <div className="mt-10 px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-full max-w-[350px] p-6 rounded-lg shadow-md shadow-gray-300 bg-white"
          >
            {/* Icon with Background */}
            <div className="relative flex items-center justify-center w-16 h-16">
              <div className="absolute left-[25px] bg-[#cae9cc] w-14 h-16 rounded-md rounded-tl-[30px] rounded-br-[30px]"></div>
              <img src={item.logo} alt="logo" className="w-14 h-14 relative" />
            </div>

            {/* Heading */}
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#4D4D4D] mt-4">
              {item.heading}
            </p>

            {/* Description */}
            <p className="text-gray-500 text-base md:text-lg mt-2 leading-relaxed">
              {item.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
