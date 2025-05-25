import React from 'react'
import './About.css'
import About1 from "../../assets/about1.png"
import About2 from "../../assets/about2.jpg"
import About3 from "../../assets/about3.jpg"
import { AiOutlineArrowRight } from "react-icons/ai"
import { motion } from 'framer-motion'

const About = () => {
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
    <section id='about'>
      <div className="about">
        <motion.h1 
          className="about-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Swimming Programs
        </motion.h1>

        <div className="cards">
          {[
            {
              title: "Swimming for babies",
              description: "Infants as young as 6 months old can benefit from group swimming lessons.",
              image: About1,
              alt: "Swimming for babies"
            },
            {
              title: "Group swim class",
              description: "We taught thousands of children how to love the water, it's time for you to jump in.",
              image: About2,
              alt: "Group swim class"
            },
            {
              title: "Private swim class",
              description: "Private lessons are 30 minutes long and pair one swimmer with one instructor.",
              image: About3,
              alt: "Private swim class"
            }
          ].map((card, index) => (
            <motion.div 
              className="card"
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="card-content">
                <h2>{card.title}</h2>
                <span>{card.description}</span>
                <motion.a 
                  href="#schedule" 
                  className="about-link"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  View schedule <AiOutlineArrowRight />
                </motion.a>
              </div>
              <div className="about-img-wrapper">
                <motion.img 
                  src={card.image} 
                  alt={card.alt}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About