import React from 'react'
import './Section.css'
import Img from './img/IMG.png'
import Circle from './img/1.png'
import { useState } from 'react'
import axios from 'axios'
const Section = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);
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

    const text = `📩 Design sectiondan xabar:\nEmail: ${email}`;

    axios.post(url, {
      chat_id: chat_id,
      text: text,
    })
    .then(() => {
      alert("Ma'lumot Telegramga yuborildi ✅");
      setEmail("");
      setIsModalOpen(false);
    })
    .catch(() => {
      alert("Xatolik yuz berdi ❌");
    });
  };
    return (<>
    
        <div className="section" id='Section'>
            <div className="container">
                <div className="section-container">
                    <div className="section-texts">
                        <h1 className="section-text">
                            50k+ users are <br />
                            using landing page.
                        </h1>
                        <p className="section-info">
                            Create custom landing pages with Omega that converts <br />
                            more visitors than any website. With lots of unique <br />
                            blocks, you can easily build a page without coding.
                        </p>
                        <button className="section-button btn" onClick={() => setIsModalOpen(true)}>
                            Get Started
                        </button>
                    </div>
                    <img src={Circle} alt="" className="circle" />
                    <img src={Img} alt="" className="section-img" />
                </div>
            </div>
        </div>
        {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Get Started</h2>

            <form onSubmit={sendMessage}>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button type="submit">
                Send
              </button>
            </form>

            <span
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </span>
          </div>
        </div>
      )}
    </>
        
    )
}

export default Section