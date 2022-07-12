import { motion } from 'framer-motion'
import React from 'react'

type Directions = 'from-top' | 'from-left' | 'from-bottom'

interface AnimateEntryProps {
  children: React.ReactNode
  stagger?: boolean
  direction: Directions
}

/**
 * Animate in children
 */
export const AnimateEntry: React.FC<AnimateEntryProps> = ({
  children,
  stagger,
  direction,
}) => {
  const getDirection = (direction: Directions): {} => {
    switch (direction) {
      case 'from-top':
        return animateInFromTop
      case 'from-left':
        return animateInFromLeft
      case 'from-bottom':
        return animateInFromBottom
      default:
        return 'from-top'
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger ? staggerAnimateIn : getDirection(direction)}
      transition={{ ease: 'easeInOut', duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

const animateInFromTop = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -25 },
}

const animateInFromLeft = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -25 },
}

const animateInFromBottom = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 25 },
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
