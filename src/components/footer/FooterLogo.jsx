import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { CiBasketball } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";
import Logo from "../../assets/logo2.svg"
const FooterLogo = () => {
  const icons = [
    <IoLogoInstagram />,
    <CiBasketball />,
    <SlSocialTwitter />,
    <AiOutlineYoutube />,
  ];
  return (
    <div>
      <img src={Logo} alt="logo" />
      <p>Copyright © 2020 Nexcent ltd. All rights reserved</p>
      {icons.map((icon)=>(
        <div className="">
          <span>{icon}</span>
        </div>
      ))}
    </div>
  );
};

export default FooterLogo;
