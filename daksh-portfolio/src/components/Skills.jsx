import React from 'react'
import { motion } from 'framer-motion'
import './Skills.css'

function Skills() {
  return (
    <div className="skills-section">
      <h2 className="tech-heading" style={{textAlign: 'center', marginBottom: '16px'}}>
        <span className="skills-title-highlight">Skills</span>
      </h2>
      <div className="skills-grid">
        <motion.div className="skill-card glass-card silver-glow" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.5}}>
          <h3 className="tech-heading">Languages</h3>
          <p>C, C++, Java, Python</p>
        </motion.div>
        <motion.div className="skill-card glass-card silver-glow" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.5, delay:0.05}}>
          <h3 className="tech-heading">Frontend</h3>
          <p>React.js, HTML, CSS, JavaScript</p>
        </motion.div>
        <motion.div className="skill-card glass-card silver-glow" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.5, delay:0.1}}>
          <h3 className="tech-heading">Backend</h3>
          <p>FastAPI, Node.js, Express.js</p>
        </motion.div>
        <motion.div className="skill-card glass-card silver-glow" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.5, delay:0.15}}>
          <h3 className="tech-heading">Database</h3>
          <p>MySQL, MongoDB</p>
        </motion.div>
        <motion.div className="skill-card glass-card silver-glow" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.5, delay:0.2}}>
          <h3 className="tech-heading">Libraries</h3>
          <p>Axios, Framer Motion, Matplotlib, NumPy</p>
        </motion.div>
        <motion.div className="skill-card glass-card silver-glow" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.5, delay:0.25}}>
          <h3 className="tech-heading">Tools</h3>
          <p>Figma, VS Code, Visual Studio, Cursor, Git, GitHub</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills

