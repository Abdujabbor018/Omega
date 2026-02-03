import React from 'react'
import './Contact.css'
import Img from './img/Img (2).png'
import Circle from './img/Oval Copy 4.png'
const Contact = () => {
  return (
    <>
    <div className="contact">
        <div className="container">
            <div className="contact-container">
                <img className='contact-img' src={Img} alt="" />
                <img src={Circle} alt="" className="contact-circle" />
            <div className="contact-texts">
              <h1 className="contact-text">
                Get started now
              </h1>
              <p className="contact-info">
                Create custom landing pages with Omega that converts <br /> 
                more visitors than any website. With lots of unique blocks, <br /> 
                you can easily build a page without coding.
              </p>
              <form className='contact-form'>
                <input className='contact-inp' type="email" placeholder='Email' />
                <button className="contact-btn">
                Get Started
                </button>
              </form>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact