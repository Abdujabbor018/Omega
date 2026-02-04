import React from 'react'
import './Header.css'
import bg from './img/BG (1).png'
import Circle from './img/Oval.png'
import Up from './img/2.png'
import axios from 'axios'
import { useState } from 'react'
const Header = () => {
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
            <div className="header">
                <div className="container">
                    <div className="header-container">
                        <img src={Circle} alt="" className="circle-header" />
                        <img src={Up} alt="" className="header-up" />
                        <div className="header-texts" data-aos="fade-up"
                            data-aos-duration="3000">
                            <h1 className="header-text">
                                Bring more leads for <br /> your business fast.
                            </h1>
                            <p className="header-info">
                                Create custom landing pages with Omega that convert more <br /> visitors than any website. With lots of unique blocks, you can <br /> easily build a page without coding.
                            </p>
                            <form action="" onSubmit={sendMessage}>
                                <input type="email" placeholder='Email Address'
                                
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required />
                                <button type='submit' className='header-button'>
                                    <div class="svg-wrapper-1">
                                        <div class="svg-wrapper">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path
                                                    fill="currentColor"
                                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <span>Send</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header