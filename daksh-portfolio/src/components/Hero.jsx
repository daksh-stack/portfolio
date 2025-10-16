import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-content glass-card silver-glow orbit-animate">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="tech-heading"
          >
            Build what you wish existed. Learn. Iterate. Launch.
          </motion.h1>
        </div>
      </section>
    </>
  );
}

export default Hero;
