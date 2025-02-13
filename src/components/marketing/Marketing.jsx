import React from 'react';
import MarketingDetails from './MarketingDetails';
import MarketingDiv from './MarketingDiv';
import AnimatedWrapper from "../../hooks/AnimatedWrapper.jsx";

const Marketing = () => {
  return (
    <AnimatedWrapper>
    <div className="  px-4 md:px-10 lg:px-20 md:mt-14">
      <MarketingDetails />
      <MarketingDiv />
    </div>
    </AnimatedWrapper>
  );
};

export default Marketing;
