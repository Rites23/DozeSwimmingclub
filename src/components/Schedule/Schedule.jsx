import React from 'react'
import "./Schedule.css"
import scheduleData from "./schedule-data"
import { motion } from 'framer-motion'

const Schedule = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id='schedule'>
      <div className="schedule">
        <motion.div 
          className="top"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>Swimming Class Schedule</span>
          <motion.a 
            href="#contact" 
            className='schedule-btn'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.a>
        </motion.div>

        <div className="schedule-cards">
          {scheduleData.map((schedule, i) => (
            <motion.div 
              className="schedule-card" 
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span>Group</span>
                <span>{schedule.class}</span>
              </motion.div>
              <div className="times">
                {schedule.days.map((day, x) => (
                  <motion.div 
                    key={x}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + x * 0.1 }}
                  >
                    <span>{day.day}</span>
                    <span>{day.time}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Schedule