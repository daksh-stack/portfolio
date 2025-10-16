import React from 'react'
import { motion } from 'framer-motion'
import Socials from './Socials'
import './Contact.css'

function Contact(){
  return (
    <section className="section" style={{position:'relative'}}>
      <motion.div
        className="contact-wrap glass-card silver-glow"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="tech-heading contact-title">
          <span className="title-accent">Contact</span>
        </h2>
        <p className="contact-sub">Let’s connect — I’m always up for building cool things.</p>
        <div className="contact-actions">
          <Socials />
        </div>
      </motion.div>
    </section>
  )
}

export default Contact


