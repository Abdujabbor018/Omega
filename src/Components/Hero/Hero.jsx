import React from 'react'
import './Hero.css'
import Icon1 from './img/Icon.png'
import Icon2 from './img/Icon (1).png'
import Icon3 from './img/Icon (2).png'
const Hero = () => {
    return (
        <>
            <div className="hero" id='Hero'>
                <div className="container">
                    <div className="hero-container">
                        <div className="hero-cards">
                            <div className="hero-card">
                                <img src={Icon1} alt="" className="hero-card-img" />
                                <div className="hero-card-texts">
                                    <h3 className="hero-card-name">
                                        Multiple Layouts
                                    </h3>
                                    <p className="hero-card-info">
                                        With lots of unique blocks, you can <br /> easily build a page without coding.
                                    </p>
                                </div>
                            </div>
                            <div className="hero-card">
                                <img src={Icon2} alt="" className="hero-card-img" />
                                <div className="hero-card-texts">
                                    <h3 className="hero-card-name">
                                        Fully Responsive
                                    </h3>
                                    <p className="hero-card-info">
                                        With lots of unique blocks, you can <br /> easily build a page without coding.
                                    </p>
                                </div>
                            </div>
                            <div className="hero-card">
                                <img src={Icon3} alt="" className="hero-card-img" />
                                <div className="hero-card-texts">
                                    <h3 className="hero-card-name">
                                        Great Support
                                    </h3>
                                    <p className="hero-card-info">
                                        With lots of unique blocks, you can <br /> easily build a page without coding.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="hero-texts">
                            <h1 className="hero-text">
                                Build a perfect <br /> landing page fast.
                            </h1>
                            <p className="hero-info">
                                Create custom landing pages with Omega that converts <br />
                                more visitors than any website. With lots of unique blocks, <br />
                                you can easily build a page without coding.
                            </p>
                            <button className="hero-button">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero