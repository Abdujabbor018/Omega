import React from 'react'
import './Section.css'
import Img from './img/IMG.png'
import Circle from './img/1.png'
const Section = () => {
    return (
        <div className="section">
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
                        <button className="section-button">
                            Get Started
                        </button>
                    </div>
                    <img src={Circle} alt="" className="circle" />
                    <img src={Img} alt="" className="section-img" />
                </div>
            </div>
        </div>
    )
}

export default Section