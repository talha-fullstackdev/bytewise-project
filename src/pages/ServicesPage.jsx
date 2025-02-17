import React from 'react'
import ServicesCom from '../components/services/ServicesCom'
import useTitle from '../hooks/UseTitle'
const ServicesPage = () => {
  useTitle("services")
  return (
    <>
    <ServicesCom/>
    </>
  )
}

export default ServicesPage