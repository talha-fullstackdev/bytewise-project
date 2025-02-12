import React, { useRef } from 'react';
const ContactForm = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()
    const handleSubmit =(e)=>{
        e.preventDefault()
        let userMessage = {
            name : nameRef.current.value,
            email:emailRef.current.value,
            message:messageRef.current.value
        }
        console.log(userMessage)
        nameRef.current.value=""
        emailRef.current.value=""
        messageRef.current.value=""
        alert("your message has been sent")
    }
  return (
    <div className="mt-8 px-4">
      <p className="text-center text-2xl font-bold text-slate-600">Contact Us</p>
      <form className="flex flex-col max-w-[700px] mx-auto mt-6 space-y-4 bg-white shadow-lg p-6 rounded-lg">
        <label className="text-slate-500 font-medium">Full Name</label>
        <input
        ref={nameRef}
          type="text"
          placeholder="Enter your name"
          className="w-full border focus:placeholder-transparent border-lime-500 rounded-md p-2 outline-none focus:ring-2 focus:ring-lime-300"
        />
        <label className="text-slate-500 font-medium">Email Address</label>
        <input
        ref={emailRef}
          type="text"
          placeholder="name@example.com"
          className="w-full border focus:placeholder-transparent border-lime-500 rounded-md p-2 outline-none focus:ring-2 focus:ring-lime-300"
        />
        <label className="text-slate-500 font-medium">Your Message</label>
        <textarea
        ref={messageRef}
          rows="3"
          placeholder="Type your message here..."
          className="w-full border focus:placeholder-transparent border-lime-500 rounded-md p-2 outline-none focus:ring-2 focus:ring-lime-300"
        ></textarea>

        <button onClick={handleSubmit} className="mt-4 w-[130px] text-[16px]  bg-[#45d449] hover:bg-[#4be751] text-white font-semibold py-2 rounded-md transition">
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
