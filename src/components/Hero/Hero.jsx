import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import Baby from "../../assets/baby.png"
import { motion } from "framer-motion"

const Hero = () => {
    const transition = { type: 'tween', duration: 1.2 }
    return (
        <section id='hero'>
            <div className="hero-container">
                <div className="hero">
                    <div className="hero-content">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...transition, delay: 0.3 }}
                        >Make a Splash with Professional Swimming Lessons</motion.h1>
                        <motion.div className="hero-text"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...transition, delay: 0.5 }}
                        >
                            <h2>Swimming for all ages</h2>
                            <p>Our mission is to make swimming lessons engaging and effective for everyone, from infants to adults.</p>
                        </motion.div>
                        <motion.div className="hero-buttons"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...transition, delay: 0.7 }}
                        >
                            <a href="#contact" className="btn btn-primary">Start Swimming</a>
                            <a href="#about" className="btn btn-secondary">Learn More</a>
                        </motion.div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Hero

