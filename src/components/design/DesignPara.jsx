import React from "react";

const DesignPara = () => {
  return (
    <div className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[650px] mx-auto md:mx-0 mt-6 md:mt-36 px-4 md:px-0">
      {/* Heading */}
      <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700">
        How to design your site footer like we did
      </p>

      {/* Paragraph */}
      <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2 md:mt-6 leading-relaxed">
        Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue
        nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat
        a magna. Donec quis erat at libero ultrices mollis. In hac habitasse
        platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis
        finibus. In euismod augue vitae nisi ultricies, non aliquet urna
        tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis
        massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis
        libero. Donec consectetur faucibus ipsum id gravida.
      </p>

      {/* Button */}
      <div className="flex md:block justify-center md:justify-start">
        <button className="bg-[#45d449] hover:bg-[#4be751] text-white px-4 py-2 rounded-md mt-4 md:mt-6">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default DesignPara;
