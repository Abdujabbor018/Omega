import React from 'react'
import './Review.css'
import User1 from './img/PHOTO.png'
import User2 from './img/PHOTO (1).png'

const Review = () => {
    return (
        <>
            <div className="review" id='Review'>
                <div className="container">
                    <div className="review-container">
                        <div className="review-top">
                            <h1 className="review-text">
                                Customer reviews
                            </h1>
                            <p className="review-info">
                                Create custom landing pages with Omega that converts <br />
                                more visitors than any website.
                            </p>
                        </div>
                        <div className="review-cards">
                            <div className="review-card">
                                <h6 className="review-card-text">
                                    OMG! I cannot believe that I have got a brand <br />
                                    new landing page after getting Omega. It was <br />
                                    super easy to edit and publish.
                                </h6>
                                <div className="user">
                                    <img className='user-img' src={User1} alt="" />
                                    <div className="user-infos">
                                        <h6 className="user-name">
                                            Jonathan Taylor
                                        </h6>
                                        <p className="user-company">
                                            CEO at Creativex
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="review-card">
                                <h6 className="review-card-text">
                                    OMG! I cannot believe that I have got a brand <br />
                                    new landing page after getting Omega. It was <br />
                                    super easy to edit and publish.
                                </h6>
                                <div className="user">
                                    <img className='user-img' src={User2} alt="" />
                                    <div className="user-infos">
                                        <h6 className="user-name">
                                            Marie Stanley
                                        </h6>
                                        <p className="user-company">
                                            Digital Marketer, Writer
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review