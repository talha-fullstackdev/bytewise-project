import React from 'react'
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <ul className='flex flex-col md:flex-row md:gap-6 md:mr-[100px] md:ml-[30px] text-gray-500 font-semibold text-md  md:text-xl mt-2 md:mt-0 '>
      
        <Link className='hover:opacity-50' to="/">Home</Link>
        <Link className='hover:opacity-50' to="/about">About</Link>
        <Link className='hover:opacity-50' to="/services">Services</Link>
        <Link className='hover:opacity-50' to="/contact">Contact</Link>
        <Link className='hover:opacity-50' to="/price">Pricing</Link>

    </ul>
  )
}

export default Navbar


