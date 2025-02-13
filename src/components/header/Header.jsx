import React, { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
const Header = () => {
  return (
    <header className=" bg-gray-100 pb-6 flex flex-col items-center gap-2 pt-4 md:p-6  md:flex-row md:justify-around  ">
      <Logo />
  
      <>
      <Navbar />
      <button className="bg-[#45d449] hover:bg-[#4be751] flex items-center gap-2 px-4 py-2 text-sm md:text-[14px] md:px-6 whitespace-nowrap rounded-md text-white  mt-2 md:mt-0">
        Register Now
        <IoIosArrowRoundForward className="text-lg" />
      </button>
      </>
    </header>
  );
};

export default Header;
