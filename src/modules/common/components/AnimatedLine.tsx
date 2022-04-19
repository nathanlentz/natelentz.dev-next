import { motion } from 'framer-motion'
import { useState } from 'react'
import { styled } from 'stitches.config'

export const AnimatedLine: React.FC<AnimatedLineProps> = ({
  axis,
  position,
}) => {
  const getPosition = (): {} => {
    switch (position) {
      case 'left':
        return { left: 0 }
      case 'top':
        return { top: 0 }
      case 'bottom':
        return { bottom: 0 }
      case 'right':
        return { right: 0 }
      default:
        return {}
    }
  }

  return (
    <Line
      initial="hide"
      animate="show"
      variants={axis == 'x' ? animateWidth : animateHeight}
      transition={{ ease: 'easeInOut', duration: 0.825 }}
      viewport={{ once: true }}
      css={getPosition()}
    ></Line>
  )
}

export interface AnimatedLineProps {
  axis: 'x' | 'y'
  position: 'top' | 'bottom' | 'left' | 'right'
}

const Line = styled(motion.span, {
  height: 0,
  width: 0,
  background: '$hiContrast',
  display: 'block',
  position: 'absolute',
  opacity: 1,
})

const animateHeight = {
  hide: {
    height: 0,
    width: '2px',
    transition: {
      height: { stiffness: 1000 },
    },
  },
  show: {
    height: '100%',
  },
}

const animateWidth = {
  hide: {
    width: 0,
    height: '2px',
    transition: {
      height: { stiffness: 1000 },
    },
  },
  show: {
    width: '100%',
  },
}
