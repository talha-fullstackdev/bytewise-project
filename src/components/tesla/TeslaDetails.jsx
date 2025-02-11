import React from 'react'
import logo from "../../assets/company/Logo.png"
import logo1 from "../../assets/company/Logo-1.png"
import logo2 from "../../assets/company/Logo-2.png"
import logo3 from "../../assets/company/Logo-3.png"
import logo4 from "../../assets/company/Logo-4.png"
import logo5 from "../../assets/company/Logo-5.png"
import { IoIosArrowRoundForward } from "react-icons/io";

const TeslaDetails = () => {
    const icons=[logo,logo1,logo2,logo3,logo4,logo5]
  return (
    <div>
        <div className="">
        <p>
        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
        <p>Tim Smith</p>
        <p>British Dragon Boat Racing Association</p>
        </div>
        <div className="">
            <div className="">
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`Company Logo ${index + 1}`}
            className="w-20 md:w-24 h-auto"
          />
        ))}
        </div>
        <div className="">
           <button>Meet all customers </button>
            <span><IoIosArrowRoundForward/></span>
           </div>

        </div>
    </div>
  )
}

export default TeslaDetails