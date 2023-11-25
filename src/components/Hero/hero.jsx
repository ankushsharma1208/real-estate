import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
import Countup from 'react-countup'
import { animate, easeIn, motion } from 'framer-motion'
const hero = () => {
    return (
        <section className='hero-wrapper'>
            <div className="paddings innerWidth flexCenter hero-container">
                {/*Left Side*/}
                <div className="flexColStart hero-left">
                    <div className='hero-title'>
                        <div className="orange-circle" />
                        <motion.h1
                            initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 2,
                                type: "spring"
                            }}>
                            Discover<br />
                            Properties
                        </motion.h1>
                    </div>
                    <div className='flexColStart hero-des'>
                        <span className='secondaryText'>Find a variety of properties that suits you easily.</span>
                        <span className='secondaryText'> Forget all differences in finding a residence for you.</span>
                    </div>
                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25} />
                        <input type="text" />
                        <button className="button">Search</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <Countup start={8800} end={9000} duration={4} />
                                <span>+</span>
                            </span>

                            <span className='secondaryText'> Premium Products </span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <Countup start={1950} end={2000} duration={4} />
                                <span>+</span>
                            </span>

                            <span className='secondaryText'> Happy Customers  </span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <Countup end={28} />
                                <span>+</span>
                            </span>

                            <span className='secondaryText'>  Award Winnings </span>
                        </div>
                    </div>
                </div>
                {/*Right Side */}
                <div className="flexCenter hero-right">

                    <motion.div
                        initial={{ x: "7rem", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "spring"
                        }} className="image-container" >
                        <img src="./hero-image.png" alt="" />
                    </motion.div>
                </div>

            </div>
        </section>

    )
}

export default hero
