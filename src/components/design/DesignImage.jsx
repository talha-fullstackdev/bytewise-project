// import React from 'react'
// import Image from "../../assets/unlock2.png"
// const DesignImage = () => {
//   return (
//         <img className='w-[250px] m-auto md:m-0 md:w-[400px] md:ml-28' src={Image} alt="image" />
//   )
// }

// export default DesignImage
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
