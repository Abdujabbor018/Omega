import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="container">
                    <div className="navbar-container">
                        <h1 className="logo">
                            Omega
                        </h1>
                        <ul className="navbar-list">
                            <li className="navbar-item">
                                <a href="" className="navbar-link">
                                    Demos
                                </a>
                            </li>
                            <li className="navbar-item">
                                <a href="" className="navbar-link">
                                    Pages
                                </a>
                            </li>
                            <li className="navbar-item">
                                <a href="" className="navbar-link">
                                    Support
                                </a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar