import React from 'react'
import { motion, useScroll } from 'framer-motion'

export default function LoaderScroll() {
    const { scrollYProgress } = useScroll();
  return (
    <motion.div className="loader_scroll"
        style={{ scaleX: scrollYProgress,
          position: "fixed",
          top:0,
          right: 0,
          left: 0,
          transformOrigin:"0%"
         }}>
      </motion.div>
  )
}
