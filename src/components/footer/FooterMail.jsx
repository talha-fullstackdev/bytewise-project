import React, { useRef } from "react";
import { FaLocationArrow } from "react-icons/fa6";
const FooterMail = () => {
  const messageRef = useRef();
  const handleButtonClicked = () => {
    alert("message has been sent");
    const message = messageRef.current.value;
    console.log("your message is", message);
    messageRef.current.value = "";
  };
  return (
    <div className=" flex flex-col gap-2 md:gap-12 md:mb-16 mr-6">
      <p className="text-white font-semibold md:text-xl">Stay up to date</p>
      <div className="flex items-center md:w-[300px]  bg-[#38474d] rounded-md p-2 md:p-3">
        <input
          ref={messageRef}
          type="email"
          placeholder="Your email address"
          className="bg-transparent outline-none text-white  px-2 placeholder-gray-300 md:placeholder:text-lg focus:placeholder-transparent"
        />
        <button onClick={handleButtonClicked} className="text-white cursor-pointer">
          <FaLocationArrow />
        </button>
      </div>
    </div>
  );
};

export default FooterMail;
