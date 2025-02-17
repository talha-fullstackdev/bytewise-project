import React from 'react'
import ContactForm from '../components/contact/ContactForm'
import useTitle from '../hooks/UseTitle'
const ContactPage = () => {
  useTitle("contact")
  return (
    <>
       <ContactForm/>
    </>
  )
}

export default ContactPage