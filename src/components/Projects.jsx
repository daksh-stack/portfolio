import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Projects.css'

function Projects() {
  const projects = [
    {
      name: 'AstroHive',
      description:
        'AstroHive is an AI-powered, distributed assistant system designed to manage and support autonomous space missions. It uses modular OPEA-compliant microservices to create intelligent agents that operate at three mission layers: rovers, satellites, and Earth-based control stations.',
      githubUrl: 'https://github.com/daksh-stack/astro-hive'
    },
    {
      name: 'CodeTrackr',
      description:
        'CodeTrackr is a browser extension designed to enhance the coding experience on competitive programming platforms. It streamlines workflow, tracks progress, and helps manage coding resources effectively.',
      githubUrl: 'https://github.com/daksh-stack/Code-Trackr'
    },
    {
      name: 'Daily-Quotes',
      description:
        'An interactive experience that shows inspirational and empowering quotes in a delightful, animated way.',
      githubUrl: 'https://github.com/daksh-stack/daily-quotes'
    },
    {
      name: 'Fashionate',
      description:
        'A fashion search engine that finds best prices via comparative analysis and lets you upload a photo to virtually try outfits using AI.',
      githubUrl: 'https://github.com/daksh-stack/fashionate-frontend'
    }
  ]

  const [activeIndex, setActiveIndex] = useState(null)
  const active = activeIndex !== null ? projects[activeIndex] : null

  return (
    <>
      <div className="Projects tech-heading">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h1>
      </div>
      <div className="projects-grid">
        {projects.map((p, idx) => (
          <motion.button
            key={p.name}
            className="project-card glass-card silver-glow project-button funky"
            onClick={() => setActiveIndex(idx)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            whileHover={{ rotateX: 6, rotateY: -6, z: 12, rotateZ: 0 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="tech-heading">{p.name}</h3>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="project-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="project-modal glass-card silver-glow"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <div className="modal-header">
                <h2 className="tech-heading" style={{margin: 0}}>{active.name}</h2>
                <button className="close-btn" onClick={() => setActiveIndex(null)} aria-label="Close">×</button>
              </div>
              <p className="modal-body">{active.description}</p>
              <div className="modal-actions">
                {active.githubUrl && (
                  <a className="action primary" href={active.githubUrl} target="_blank" rel="noreferrer">View on GitHub</a>
                )}
                <button className="action primary" onClick={() => setActiveIndex(null)} style={{marginLeft: '8px'}}>Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Projects


