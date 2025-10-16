import React from 'react'
import { motion } from 'framer-motion'
import './Socials.css'

function Socials(){
  return (
    <div className="socials socials-right">
      <motion.a className="social-btn linkedin" href="https://www.linkedin.com/in/daksh-hardiya-909155276" target="_blank" rel="noreferrer" aria-label="LinkedIn" initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}}>
        <span className="icon">in</span>
        <span className="label">LinkedIn</span>
      </motion.a>
      <motion.a className="social-btn x" href="https://x.com/HardiyaDaksh" target="_blank" rel="noreferrer" aria-label="X" initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay:0.05}}>
        <span className="icon">𝕏</span>
        <span className="label">X</span>
      </motion.a>
      <motion.a className="social-btn github" href="https://github.com/daksh-stack" target="_blank" rel="noreferrer" aria-label="GitHub" initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay:0.1}}>
        <span className="icon">{`{}`}</span>
        <span className="label">GitHub</span>
      </motion.a>
    </div>
  )
}

export default Socials


