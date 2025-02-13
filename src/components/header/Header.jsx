// import React from "react";
// import Logo from "./Logo";
// import Navbar from "./Navbar";
// import { FiMenu, FiX } from "react-icons/fi";
// import { useState } from "react";
// import { IoIosArrowRoundForward } from "react-icons/io";
// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <header className=" bg-gray-100 pb-6 flex flex-col items-center gap-2 pt-4 md:p-6  md:flex-row md:justify-evenly  ">
//       <Logo />
      
//       <div className={`flex flex-col md:flex-row`}>
//       <Navbar />
//       <button className="bg-[#45d449] ml-2 hover:bg-[#4be751] flex items-center gap-2 px-4 py-2 text-sm md:text-[14px] md:px-6 whitespace-nowrap rounded-md text-white  mt-2 md:mt-0">
//         Register Now
//         <IoIosArrowRoundForward className="text-lg" />
//       </button>
//       <button
//         className="md:hidden text-2xl absolute right-6 top-5 focus:outline-none"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <FiX /> : <FiMenu />}
//       </button>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { FiMenu, FiX } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-100 pb-6 flex flex-col items-start md:items-center ml-4 gap-2 pt-4 md:p-6 md:flex-row md:justify-evenly relative">
      <Logo />
      {/* Toggle Button for Mobile */}
      <button
        className="md:hidden text-2xl absolute right-6 top-5 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      {/* Navbar and Register Button - Show on Medium and Larger Screens */}
      <div className={`flex flex-col self-center  mt-2 md:mt-0 md:flex-row items-center  gap-4 ${isOpen ? "flex" : "hidden"} md:flex`}>
        <Navbar />
        <button className="bg-[#45d449]  hover:bg-[#4be751] flex items-center gap-2 px-4 py-2 text-sm md:text-[14px] md:px-6 whitespace-nowrap rounded-md text-white mt-2 md:mt-0">
          Register Now
          <IoIosArrowRoundForward className="text-lg" />
        </button>
      </div>
    </header>
  );
};

export default Header;
