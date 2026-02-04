import React, { useState } from 'react';
import axios from 'axios';  // axios ni import qilamiz
import './Contact.css';
import Img from './img/Img (2).png';
import Circle from './img/Oval Copy 4.png';

const Contact = () => {
  const [email, setEmail] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Email kiriting ❗");
      return;
    }

    const token = "8586580877:AAEazv2Y3aPuc9jNS6_ApbFDYgWfpiFf23k";
    const chat_id = 5258999486;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const text = `📧 Yangi obunachi:\nEmail: ${email}`;

    axios.post(url, {
      chat_id: chat_id,
      text: text,
    })
      .then(() => {
        alert("Ma'lumot Telegram botga yuborildi ✅");
        setEmail("");
      })
      .catch((error) => {
        console.error(error);
        alert("Xatolik yuz berdi ❌");
      });
  };

  return (
    <>
      <div className="contact" id='Contact'>
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
              <form className='contact-form' onSubmit={sendMessage}>
                <input
                  className='contact-inp'
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type='submit' className="contact-btn">
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
