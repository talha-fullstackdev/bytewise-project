import React from 'react'
import AboutCom from '../components/About/AboutCom'
import useTitle from '../hooks/UseTitle'
const AboutPage = () => {
  useTitle("about")
  return (
    <>
      <AboutCom/>
    </>
  )
}

export default AboutPage