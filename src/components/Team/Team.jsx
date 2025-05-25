import React from 'react'
import "./Team.css"
import Team1 from "../../assets/team-1.png"
import { motion } from 'framer-motion'

const Team = () => {
  return (
    <section>
      <div className="team">
        <motion.div 
          className="team-image"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src={Team1} alt="Swimming Team" />
        </motion.div>
        <motion.div 
          className="team-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="team-intro">Meet Our Dedicated Coaches</span>
          <p className="team-description">Our certified instructors bring years of experience, passion, and a love for swimming to every lesson. From water safety to advanced strokes, our team is committed to helping every swimmer thrive in a safe and supportive environment.</p>
          <div>
            <span className="team-curriculum">A Proven Curriculum</span>
            <span className="team-curriculum-desc">A progressive curriculum focused on water safety, skill development, and proper swimming technique for the four fundamental swim strokes.</span>
          </div>
          <motion.a 
            href="#team-details" 
            className="btn team-btn"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Meet the Team
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Team