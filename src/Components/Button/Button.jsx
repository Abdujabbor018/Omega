import React, { useState } from 'react'
import axios from 'axios'
import './Button.css'

const Button = () => {

    const [email, setEmail] = useState("");
    const [open, setOpen] = useState(false);

    const sendMessage = (e) => {
        e.preventDefault();

        const token = "8586580877:AAEazv2Y3aPuc9jNS6_ApbFDYgWfpiFf23k";
        const chat_id = 5258999486;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const text = `📧 Yangi obunachi: ${email}`;

        axios.post(url, {
            chat_id: chat_id,
            text: text
        }).then(() => {
            alert("Muvaffaqiyatli obuna bo'ldingiz! ✅");
            setEmail("");
            setOpen(false);
        }).catch((err) => {
            console.error(err);
            alert("Xatolik yuz berdi.");
        });
    };

    return (
        <>
            <button onClick={() => setOpen(true)}>
                Get Started
            </button>

            {open && (
                <div className="overlay">

                    <form className="modal" onSubmit={sendMessage}
                        onClick={(e) => e.stopPropagation()}>

                        <span onClick={() => setOpen(false)}>✖</span>

                        <h2>Email kiriting</h2>

                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button type="submit">
                            Send
                        </button>

                    </form>

                </div>
            )}
        </>
    )
}

export default Button
