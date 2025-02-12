import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { CiBasketball } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";
import Logo from "../../assets/logo2.svg";

const FooterLogo = () => {
  const icons = [
    <IoLogoInstagram key="instagram" />,
    <CiBasketball key="basketball" />,
    <SlSocialTwitter key="twitter" />,
    <AiOutlineYoutube key="youtube" />,
  ];

  return (
    <div className="w-[300px] pl-8 md:pl-0 md:mt-10">
      <img src={Logo} alt="logo" />
      <p className="my-7 text-[#F5F7FA] text-sm md:text-lg">
        Copyright © 2020 Nexcent Ltd. All rights reserved
      </p>
      {/* Flex container for icons */}
      <div className="flex space-x-4 text-white text-2xl">
        {icons.map((icon) => (
          <div
            key={icon.key}
            className="w-10 h-10 md:w-12 md:h-12 bg-[#38474d]  rounded-full flex items-center justify-center"
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterLogo;
