import React from "react";
import TeslaImage from "./TeslaImage";
import TeslaDetails from "./TeslaDetails";
import AnimatedWrapper from "../../hooks/AnimatedWrapper.jsx";

const Tesla = () => {
  return (
    <AnimatedWrapper>
    <div className="mt-10 md:flex justify-around md:ml-[200px]">
      <TeslaImage />
      <TeslaDetails />
    </div>
    </AnimatedWrapper>
  );
};

export default Tesla;
