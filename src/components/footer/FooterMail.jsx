import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";

const FooterMail = () => {
  return (
    <div>
        <p>Stay up to date</p>
        <div className="">
        <input type="Your email address" />
        <span><FaLocationArrow />
        </span>
        </div>
    </div>
  )
}

export default FooterMail