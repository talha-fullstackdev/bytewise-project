import React from 'react'
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <ul className='flex flex-col md:flex-row md:gap-4 text-gray-500 font-semibold text-md  md:text-xl mt-2 md:mt-0'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/price">Pricing</Link>
    </ul>
  )
}

export default Navbar

Navbar.js
