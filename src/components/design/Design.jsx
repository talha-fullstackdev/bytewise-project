import React from 'react';
import DesignImage from './DesignImage';
import DesignPara from './DesignPara';
import AnimatedWrapper from "../../hooks/AnimatedWrapper.jsx";

const Design = () => {
  return (
    <AnimatedWrapper>
    <div className="mt-10 flex flex-col md:flex-row items-center md:justify-evenly gap-2 px-4 md:px-12 lg:px-24">
      <DesignImage />
      <DesignPara />
    </div>
    </AnimatedWrapper>
  );
};

export default Design;
