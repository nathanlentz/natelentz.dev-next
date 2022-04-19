import { motion } from 'framer-motion'
import React from 'react'

interface AnimateEntryProps {
  children: React.ReactNode
  stagger?: boolean
}

/**
 * Animate in children
 */
export const AnimateEntry: React.FC<AnimateEntryProps> = ({
  children,
  stagger,
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger ? staggerAnimateIn : animateIn}
      transition={{ ease: 'easeInOut', duration: 0.7 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

const animateIn = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -25 },
}

const staggerAnimateIn = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
}
