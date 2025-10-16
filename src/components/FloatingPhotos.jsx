import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'

function FloatingPhotos(){
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -160])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 12])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -10])

  return (
    <div className="floating-photos" style={{position:'fixed', inset:0, pointerEvents:'none', zIndex:0}}>
      <motion.img
        src={img1}
        alt="profile-1"
        style={{
          position:'absolute',
          width:120,
          height:160,
          objectFit:'cover',
          borderRadius:12,
          left:'6%',
          top:'20%',
          y: y1,
          rotate: rotate1,
          filter:'brightness(0.9) saturate(0.9) drop-shadow(0 8px 24px rgba(0,0,0,0.5))',
          opacity: 0.6
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 0.8 }}
      />
      <motion.img
        src={img2}
        alt="profile-2"
        style={{
          position:'absolute',
          width:140,
          height:180,
          objectFit:'cover',
          borderRadius:12,
          right:'8%',
          bottom:'18%',
          y: y2,
          rotate: rotate2,
          filter:'brightness(0.9) saturate(0.9) drop-shadow(0 8px 24px rgba(0,0,0,0.5))',
          opacity: 0.55
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.55, y: 0 }}
        transition={{ duration: 0.9 }}
      />
    </div>
  )
}

export default FloatingPhotos


