
import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { FiMenu, FiX } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import AnimatedWrapper from "../../hooks/AnimatedWrapper.jsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatedWrapper>
    <header className="bg-gray-100 pb-6 flex flex-col items-start md:items-center ml-4 gap-2 pt-4 md:p-6 md:flex-row md:justify-evenly relative">
      <Logo />

      <motion.button
        className="md:hidden text-2xl absolute right-6 top-5 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </motion.button>

      <div className="hidden md:flex items-center gap-4">
        <Navbar />
        <button className="bg-[#45d449] hover:bg-[#4be751] flex items-center gap-2 px-4 py-2 text-sm md:text-[14px] md:px-6 whitespace-nowrap rounded-md text-white">
          Register Now
          <IoIosArrowRoundForward className="text-lg" />
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col w-full items-center gap-4 mt-4"
        >
          <Navbar />
          <button className="bg-[#45d449] hover:bg-[#4be751] flex items-center gap-2 px-4 py-2 text-sm md:text-[14px] md:px-6 whitespace-nowrap rounded-md text-white">
            Register Now
            <IoIosArrowRoundForward className="text-lg" />
          </button>
        </motion.div>
      )}
    </header>
    </AnimatedWrapper>
  );
};

export default Header;

