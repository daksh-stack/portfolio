import React from 'react'
import {motion} from 'framer-motion'
import './About.css'

function About() {
  return (
    <div className='about glass-card silver-glow pulse-emit' style={{position:'relative'}}>
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <h1 className='tech-heading' style={{marginBottom: '16px'}}>About</h1>
            <p style={{maxWidth: '900px', margin: '0 auto', lineHeight: 1.6}}>
              Hey there 👋 I’m DAKSH HARDIYA, who loves connecting dots — between ideas, people, and
              problems. I’m that curious thinker who’ll question everything, experiment with
              anything, and still find joy in the process (even when things crash at 2 AM 😅).
              <br/><br/>
              Whether it’s coding, researching, or just observing how the world works, I’m all
              about digging deeper and creating something that makes sense and makes impact.
              <br/><br/>
              I see growth as a mix of trying, failing, learning, and trying again — a constant
              loop that keeps life exciting. I’m here to build things with clarity, creativity,
              and curiosity — while staying real and grounded.
              <br/><br/>
              ☕ “Still figuring out if coffee powers my creativity or just my existential crises.”
            </p>
          </motion.div>
    </div>
  )
}

export default About