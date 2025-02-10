import React from 'react'
import HomePage from "../pages/HomePage.jsx"
import ContactPage from "../pages/ContactPage.jsx"
import AboutPage from "../pages/AboutPage.jsx"
import ServicesPage from "../pages/ServicesPage.jsx"
import PricingPage from "../pages/PricingPage.jsx"
import PageNotFound from '../pages/PageNotFound.jsx'
import { Route,Routes } from 'react-router'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='contact' element={<ContactPage/>}/>
            <Route path='/services' element={<ServicesPage/>}/>
            <Route path='/price' element={<PricingPage/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes