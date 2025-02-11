import React from 'react';
import Image from "../../assets/unlock2.png";

const DesignImage = () => {
  return (
    <div className="flex justify-center md:justify-start w-full md:w-auto">
      <img
        className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] xl:w-[500px]"
        src={Image}
        alt="image"
      />
    </div>
  );
};

export default DesignImage;
