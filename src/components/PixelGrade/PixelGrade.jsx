// import React from 'react'
// import Image from "../../assets/unlock-img.svg"
// const PixelGrade = () => {
//   return (
//     <div className='flex flex-col mt-4 items-center px-4 md:flex-row md:gap-10'>
//         <div className="md:ml-[90px]">
//         <img className='md:w-[600px]' src={Image} alt="image" />
//         </div>
//         <div className="flex flex-col gap-3 md:w-[500px] md:mr-16">
//             <p className='text-[#4D4D4D] text-md md:text-4xl font-bold md:font-semibold md:max-w-[500px]'>The unseen of spending three years at Pixelgrade</p>
//             <p className='text-[#4D4D4D] text-sm  md:text-1xl  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
//             <button className='bg-[#45d449] hover:bg-[#4be751] text-white w-[100px] items-center m-auto py-2 rounded-md '>Learn More</button>
//         </div>
//     </div>
//   )
// }

// export default PixelGrade
import React from "react";
import Image from "../../assets/unlock-img.svg";

const PixelGrade = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-6 md:px-16 lg:px-24 gap-6 md:gap-12 mt-8">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          className="w-full max-w-[500px] md:max-w-[600px] object-contain"
          src={Image}
          alt="Unlocking Creativity"
        />
      </div>

      {/* Text Content Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <p className="text-[#4D4D4D] text-lg md:text-3xl lg:text-4xl font-semibold leading-tight">
          The unseen of spending three years at Pixelgrade
        </p>
        <p className="text-[#4D4D4D] text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis.
        </p>
        {/* Button */}
        <div className="flex justify-start md:justify-normal">
          <button className="bg-[#45d449] m-auto md:m-0 hover:bg-[#3cbf3f] text-white px-2 py-1   md:px-5 md:py-3 transition duration-300 shadow-md text-xl">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PixelGrade;
