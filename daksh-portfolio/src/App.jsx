import {motion} from 'framer-motion'
import React from 'react'
import Hero from './components/Hero.jsx'
import About  from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Socials from './components/Socials.jsx'
import Contact from './components/Contact.jsx'
import FloatingPhotos from './components/FloatingPhotos.jsx'
import './App.css'

function App() {
  return (
    <div className='hero-div'>
      <div className="space-overlay"></div>
      <FloatingPhotos />
      <Hero />
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App