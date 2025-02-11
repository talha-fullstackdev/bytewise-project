// import React from "react";
// import icon1 from "../../assets/clients/icon1.svg"
// import icon2 from "../../assets/clients/icon2.svg"
// import icon3 from "../../assets/clients/icon3.svg"
// import icon4 from "../../assets/clients/icon4.svg"
// import icon5 from "../../assets/clients/icon5.svg"
// import icon6 from "../../assets/clients/icon6.svg"
// import icon7 from "../../assets/clients/icon7.svg"
// const OurClients = () => {
//   return (
//     <div className="flex flex-col gap-4 mt-10">
//       <div className="">
//         <p className="text-center text-md text-gray-600  font-semibold md:text-4xl md:font-semibold">Our Clients</p>
//         <p className="text-center text-md max-w-[240px] m-auto mt-2 md:max-w-[100%] md:text-lg text-gray-500">We have been working with some Fortune 500+ clients</p>
//       </div>
//       <div className="grid grid-cols-2 gap-6 m-auto mt-4 md:grid-cols-7 md:gap-52 md:mt-12">
//         <img src={icon1} alt="icon" />
//         <img src={icon2} alt="icon" />
//         <img src={icon3} alt="icon" />
//         <img src={icon4} alt="icon" />
//         <img src={icon5} alt="icon" />
//         <img src={icon6} alt="icon" />
//         <img src={icon7} alt="icon" />
//       </div>
//       <div className="mt-4  ">
//         <p className="text-center text-md max-w-[240px] m-auto">Manage your entire community
//         in a single system</p>
//         <p className="text-center text-md max-w-[240px] m-auto mt-2 text-gray-700  font-semibold">Who is Nextcent suitable for?</p>
//       </div>
//     </div>
//   );
// };

// export default OurClients;
// import React from "react";
// import icon1 from "../../assets/clients/icon1.svg";
// import icon2 from "../../assets/clients/icon2.svg";
// import icon3 from "../../assets/clients/icon3.svg";
// import icon4 from "../../assets/clients/icon4.svg";
// import icon5 from "../../assets/clients/icon5.svg";
// import icon6 from "../../assets/clients/icon6.svg";
// import icon7 from "../../assets/clients/icon7.svg";

// const OurClients = () => {
//   return (
//     <div className="flex flex-col gap-6 mt-10 px-4">
//       {/* Title Section */}
//       <div className="text-center">
//         <p className="text-gray-700 font-semibold text-lg md:text-4xl">
//           Our Clients
//         </p>
//         <p className="text-gray-500 text-sm md:text-lg max-w-md mx-auto mt-2">
//           We have been working with some Fortune 500+ clients
//         </p>
//       </div>

//       {/* Icons Grid */}
//       <div className="flex flex-wrap justify-center gap-6 mt-4 md:gap-12 md:justify-evenly">
//         <img className="w-8 md:w-14" src={icon1} alt="icon1" />
//         <img className="w-16 md:w-14" src={icon2} alt="icon2" />
//         <img className="w-16 md:w-14" src={icon3} alt="icon3" />
//         <img className="w-16 md:w-14" src={icon4} alt="icon4" />
//         <img className="w-16 md:w-14" src={icon5} alt="icon5" />
//         <img className="w-16 md:w-14" src={icon6} alt="icon6" />
//         <img className="w-16 md:w-14" src={icon7} alt="icon7" />
//       </div>

//       {/* Bottom Text Section */}
//       <div className="mt-6 text-center">
//         <p className="text-gray-600 text-sm md:text-lg max-w-md mx-auto leading-relaxed">
//           Manage your entire community in a single system
//         </p>
//         <p className="text-gray-800 font-bold text-lg md:text-2xl mt-2">
//           Who is Nextcent suitable for?
//         </p>
//       </div>
//     </div>
//   );
// };

// export default OurClients;
import React from "react";
import icon1 from "../../assets/clients/icon1.svg";
import icon2 from "../../assets/clients/icon2.svg";
import icon3 from "../../assets/clients/icon3.svg";
import icon4 from "../../assets/clients/icon4.svg";
import icon5 from "../../assets/clients/icon5.svg";
import icon6 from "../../assets/clients/icon6.svg";
import icon7 from "../../assets/clients/icon7.svg";

const OurClients = () => {
  return (
    <div className="flex flex-col gap-6 mt-10 px-4">
      {/* Title Section */}
      <div className="text-center">
        <p className="text-[#4D4D4D] font-semibold text-lg md:text-4xl">
          Our Clients
        </p>
        <p className="text-gray-500 text-md md:text-lg max-w-md mx-auto mt-2">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      {/* Icons Flex Layout */}
      <div className="flex flex-wrap justify-center gap-6 md:mt-4 md:gap-12 md:justify-evenly overflow-x-auto">
        <img className="w-10 md:w-14" src={icon1} alt="icon1" />
        <img className="w-10 md:w-14" src={icon2} alt="icon2" />
        <img className="w-10 md:w-14" src={icon3} alt="icon3" />
        <img className="w-10 md:w-14" src={icon4} alt="icon4" />
        <img className="w-10 md:w-14" src={icon5} alt="icon5" />
        <img className="w-10 md:w-14" src={icon6} alt="icon6" />
        <img className="w-10 md:w-14" src={icon7} alt="icon7" />
      </div>

      {/* Bottom Text Section */}
      <div className="md:mt-6 text-center">
        <p className="text-[#4D4D4D] leading-[44px] text-md md:text-3xl font-semibold max-w-md mx-auto ">
          Manage your entire community in a single system
        </p>
        <p className="text-gray-600  text-lg md:text-md md:mt-2">
          Who is Nextcent suitable for?
        </p>
      </div>
    </div>
  );
};

export default OurClients;
