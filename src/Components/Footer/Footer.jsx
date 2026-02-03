import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer-container">
                        <ul className="footer-list">
                            <li className="footer-name">
                                Omega
                            </li>
                            <li className="footer-item">
                                With lots of unique blocks, <br />
                                you can easily build a page <br />
                                without coding.
                            </li>
                            <div className="footer-social">
                                <div class="effect thurio">
                                    <div class="buttons">
                                        <a href="#" class="tw" title="Join us on Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                        <a href="#" class="fb" title="Join us on Facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                        <a href="#" class="g-plus" title="Join us on Google+"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                                    </div>
                                </div>

                            </div>
                        </ul>
                        <div className="ul-footer-list">
                            <li className="footer-name">
                                About
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-link">Our mission</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-link">Our story</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-link">Team Members</a>
                            </li>
                        </div>
                        <div className="ul-footer-list">
                            <li className="footer-name">
Learn
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-link">Tutorials</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-link">How it works</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-link">F.A.Q</a>
                            </li>

                        </div>
                        <div className="ul-footer-list">
                            <li className="footer-name">
Stories
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-link">Blog</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-link">Tech stories</a>
                            </li>

                        </div>
                        <div className="ul-footer-list">
                            <li className="footer-name">
Contact us
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-link blue">support@uxtheme.net</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-link blue">+133-394-3439-1435</a>
                            </li>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer