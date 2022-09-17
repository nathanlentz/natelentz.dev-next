import { motion } from 'framer-motion'
import { styled } from 'stitches.config'
import { AnimateEntry, Box, Grid, H1, Stack, Text } from '@common/components'
import { AnimatedLine } from '@common/components/AnimatedLine'
import Image from 'next/image'
import heroPic from '../../../../public/images/hero-3.jpg'

export const Hero: React.FC = () => {
  return (
    <Box>
      <HeroText weight="boldItalic">
        <span className="overflow-hidden">
          <motion.span
            variants={heroAnimate}
            initial="initial"
            animate="enter"
            whileInView="enter"
            viewport={{ once: true }}
          >
            <span>Nate</span>
            <span>Lentz</span>
          </motion.span>
        </span>
      </HeroText>
      <Box
        css={{
          marginTop: '50px',
          position: 'relative',
        }}
      >
        <AnimatedLine axis="y" position="left" css={{ zIndex: '10' }} />
        <ImageStack>
          <AnimateEntry direction="from-left">
            <ImageBox>
              <Image
                src={heroPic}
                alt="Picture of Nate and Rosie"
                priority={true}
              />
            </ImageBox>
          </AnimateEntry>
        </ImageStack>
      </Box>
    </Box>
  )
}

const ImageStack = styled(Stack, {
  marginLeft: '15px',
  marginRight: '15px',
  paddingTop: '25px',
  paddingBottom: '25px',

  '@bpmd': {
    marginLeft: '50px',
    marginRight: '50px',
    paddingTop: '50px',
    paddingBottom: '50px',
  },
})

const ImageBox = styled(Box, {
  width: '100%',
})

const HeroText = styled(motion.h1, H1, {
  fontSize: '$8',
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
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
      staggerChildren: 0.05,
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
