import React from 'react'
import './Design.css'
import Img from './img/Img (1).png'
import Circle from  './img/Group (6).png'
const Design = () => {
  return (
    <>
    <div className="design">
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
                    <button className='design-button'>
                        Get Started
                    </button>
                </div>
                <img className='circle-img' src={Circle} alt="" />
                <img className='design-img' src={Img} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Design