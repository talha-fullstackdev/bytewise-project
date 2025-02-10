import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
const Header = () => {
  return (
    <header className="bg-gray-100 flex flex-col items-center gap-2 pt-4 md:flex-row md:justify-around md:p-10 ">
      <Logo />
      <Navbar />
      <button className="bg-green-500 flex items-center gap-2 px-4 py-2 text-sm md:text-[14px] md:px-6 whitespace-nowrap rounded-md text-white hover:bg-green-400 mt-2 md:mt-0">
        Register Now
        <IoIosArrowRoundForward className="text-lg" />
      </button>
    </header>
  );
};

export default Header;

Header.js



