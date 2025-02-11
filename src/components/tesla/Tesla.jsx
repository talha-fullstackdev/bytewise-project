import React from "react";
import TeslaImage from "./TeslaImage";
import TeslaDetails from "./TeslaDetails";
const Tesla = () => {
  return (
    <div className="mt-10 md:flex justify-around md:ml-[200px]">
      <TeslaImage />
      <TeslaDetails />
    </div>
  );
};

export default Tesla;
