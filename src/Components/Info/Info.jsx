import React from 'react'
import './Info.css'
import Icon1 from './img/Icon (3).png'
import Icon2 from './img/Icon (4).png'
import Icon3 from './img/Icon (5).png'
import Icon4 from './img/Icon (6).png'
import Icon5 from './img/Icon (7).png'
import Icon6 from './img/Icon (8).png'
import Icon7 from './img/Icon (9).png'
import Icon8 from './img/Icon (10).png'
const Info = () => {
    return (
        <>
            <div className="info" id='Info'>
                <div className="container">
                    <div className="info-container">

                        <h2 className='info-text'>It’s everything<br />you’ll ever need</h2>

                        <div className='info-cards'>
                            <div className='info-card'>
                                <img src={Icon1} alt="" className="info-card-img" />

                                <p>50+ Unique Design Blocks</p>
                            </div>

                            <div className='info-card'>
                                <img src={Icon2} alt="" className="info-card-img" />
                                <p>Multiple Layouts</p>
                            </div>

                            <div className='info-card'>
                                <img src={Icon3} alt="" className="info-card-img" />
                                <p>Mobile First Design</p>
                            </div>

                            <div className='info-card'>
                                <img src={Icon4} alt="" className="info-card-img" />
                                <p>Fully Responsive</p>
                            </div>

                            <div className='info-card'>
                                <img src={Icon5} alt="" className="info-card-img" />
                                <p>Bootstrap 4 Framework</p>
                            </div>

                            <div className='info-card'>
                                <img src={Icon6} alt="" className="info-card-img" />
                                <p>Humanly Support</p>
                            </div>

                            <div className='info-card'>
                                <img src={Icon7} alt="" className="info-card-img" />
                                <p>Lifetime Updates</p>
                            </div>

                            <div className='info-card'>
                                <img src={Icon8} alt="" className="info-card-img" />
                                <p>Rich Documentation</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Info