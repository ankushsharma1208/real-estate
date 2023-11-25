import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings innerwidth flexCenter f-container">
                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt='' />
                    <span className="secondaryText">
                        Our vision is to make all the people<br />
                        live at the best place for them.
                    </span>
                </div>
                <div className="flexColStart f-right">
                    <span className='primaryText'>Information</span>
                    <span className='secondaryText'>123 New York, FloRida4512, USA</span>
                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
import './Footer.css'
export default Footer
