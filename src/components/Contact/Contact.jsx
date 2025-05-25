import React from 'react'
import './Contact.css'
import {BsClockFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import {GiSmartphone} from "react-icons/gi" 
import Location from "../../assets/location.png"
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id='contact'>
      <div className="contact">
        <motion.h1 
          className="contact-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Find us here
        </motion.h1>

        <div className="contact-content">
          <motion.div 
            className="contact-map"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={Location} alt="Location map" />
          </motion.div>

          <motion.div 
            className="contact-info-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="info-card location">
              <MdLocationOn className="info-icon"/>
              <div className="info-text">
                <h3>Location</h3>
                <p>Pretoria</p>
                <p>Gauteng</p>
              </div>
            </div>

            <div className="info-card hours">
              <BsClockFill className="info-icon"/>
              <div className="info-text">
                <h3>Hours</h3>
                <p>Monday - Sunday</p>
                <p>10:00 - 17:00</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="info-card contact-details">
              <GiSmartphone className="info-icon"/>
              <div className="info-text">
                <h3>Contact</h3>
                <p>071 673 6500</p>
                <p>ritesh.balu@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact