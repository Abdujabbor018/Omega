import React from 'react'
import './Header.css'
import bg from './img/Image (2).png'
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="header-container">
                        <div className="header-texts">
                            <h1 className="header-text">
                                Bring more leads for <br /> your business fast.
                            </h1>
                            <p className="header-info">
                                Create custom landing pages with Omega that convert more <br /> visitors than any website. With lots of unique blocks, you can <br /> easily build a page without coding.
                            </p>
                            <form action="">
                                <input type="email" placeholder='Email Address' />
                                <button className='header-button'>
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

export default Header