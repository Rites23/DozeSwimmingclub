import React, { useState } from 'react'
import './Header.css'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import LogoCircle from "../../assets/logo-circle.png"
import { motion } from 'framer-motion'

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const menuItems = ["home", "about", "gallery", "schedule", "contact"]
    
    return (
        <header>
            <nav className="container">
                <div className="header__logo">
                    <img src={LogoCircle} alt="Doze Swimming Club Logo" />
                    <span>Doze Swimming Club</span>
                </div>
                
                {/* Desktop Menu */}
                <div className="header__menu-desktop">
                    <ul>
                        {menuItems.map((item, i) => (
                            <li key={i}>
                                <a href={`#${item}`}>{item}</a>
                            </li>
                        ))}
                    </ul>
                    <a href="#contact" className="btn btn-primary">Book Now</a>
                </div>

                {/* Mobile Menu */}
                <div className="header__menu-mobile">
                    <HiMenuAlt4 onClick={() => setToggle(!toggle)} />
                    {toggle && (
                        <motion.div
                            initial={{ x: 300 }}
                            animate={{ x: 0 }}
                            transition={{ type: 'spring', stiffness: 100 }}
                            className="mobile-menu"
                        >
                            <div className="mobile-menu-header">
                                <img src={LogoCircle} alt="Logo" />
                                <HiX onClick={() => setToggle(false)} />
                            </div>
                            <ul>
                                {menuItems.map((item, i) => (
                                    <li key={i}>
                                        <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact" className="btn btn-primary">Book Now</a>
                        </motion.div>
                    )}
                </div>
            </nav>
        </header>
    )
}
export default Header