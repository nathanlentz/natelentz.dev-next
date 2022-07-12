import { motion } from 'framer-motion'
import { styled } from 'stitches.config'

export const AnimatedLine: React.FC<AnimatedLineProps> = ({
  axis,
  position,
  css,
}) => {
  const getPosition = (): {} => {
    switch (position) {
      case 'left':
        return { ...css, left: 0 }
      case 'top':
        return { ...css, top: 0 }
      case 'bottom':
        return { ...css, bottom: 0 }
      case 'right':
        return { ...css, right: 0 }
      default:
        return {
          ...css,
        }
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
  css?: {}
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
