import { motion } from 'framer-motion'
import { styled } from 'stitches.config'
import { H1 } from '@common/components'
import { AnimatedLine } from '@common/components/AnimatedLine'

export const Hero: React.FC = () => {
  return (
    <>
      <HeroText weight="boldItalic">
        <span className="overflow-hidden">
          <motion.span
            variants={heroAnimate}
            initial="initial"
            whileInView="enter"
            viewport={{ once: true }}
          >
            <span>Nate Lentz</span>
          </motion.span>
        </span>
      </HeroText>
    </>
  )
}

const HeroText = styled(motion.h1, H1, {
  fontSize: '$8',
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  '@bpmd': { fontSize: '$9' },
  position: 'relative',
})

const heroAnimate = {
  enter: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'circOut',
      delay: 0.25,
    },
  },
  initial: {
    y: 90,
    opacity: 0,
    rotateX: 40,
    rotateY: 4,
    rotateZ: 4,
    scale: 0.9,
  },
}
