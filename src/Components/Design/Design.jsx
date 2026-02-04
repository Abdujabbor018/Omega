import React, { useState } from 'react';
import './Design.css';
import axios from 'axios';
import Img from './img/Img (1).png';
import Circle from './img/Group (6).png';

const Design = () => {
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

  return (
    <>
      <div className="design" id="Design">
        <div className="container">
          <div className="design-container">
            <div className="design-texts">
              <h1 className="design-text">
                Save tons of time <br />
                on design & coding.
              </h1>

              <p className="design-info">
                Create custom landing pages with Omega that converts <br />
                more visitors than any website. With lots of unique blocks,<br />
                you can easily build a page without coding.
              </p>

              <button
                className="design-button"
                onClick={() => setIsModalOpen(true)}
              >
                Get Started
              </button>
            </div>

            <img className="circle-img" src={Circle} alt="" />
            <img className="design-img" src={Img} alt="" />
          </div>
        </div>
      </div>

      {/* MODAL */}
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
  );
};

export default Design;
