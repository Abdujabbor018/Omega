import React from 'react'
import './Header.css'
import bg from './img/BG (1).png'
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="header-container">
                        <div className="header-texts" data-aos="fade-up"
                            data-aos-duration="3000">
                            <h1 className="header-text">
                                Bring more leads for <br /> your business fast.
                            </h1>
                            <p className="header-info">
                                Create custom landing pages with Omega that convert more <br /> visitors than any website. With lots of unique blocks, you can <br /> easily build a page without coding.
                            </p>
                            <form action="">
                                <input type="email" placeholder='Email Address' />
                                <button className='header-button'>
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