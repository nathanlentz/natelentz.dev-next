import { motion } from 'framer-motion'
import { styled } from 'stitches.config'
import { AnimatedLine } from './AnimatedLine'
import { Container } from './Container'
import { Grid } from './Grid'

export const WordList: React.FC = () => {
  return (
    <>
      <WordContainer css={{ overflow: 'hidden' }}>
        <AnimatedLine axis="y" position="left" />
        <Words>
          <Word>FULL-STACK</Word>
          <Word>CONSULTANT</Word>
          <Word>REACT</Word>
          <Word>CLOUD</Word>
          <Word>ECOMMERCE</Word>
        </Words>
      </WordContainer>
    </>
  )
}

const WordContainer = styled(motion.div, {
  position: 'relative',
  marginTop: '50px',
})

const Words = styled(motion.div, {
  // position: 'absolute'
  display: 'flex',
  flexDirection: 'column',
})

const Word = styled('span', {
  fontSize: '$10',
  fontWeight: 800,
  color: '$loContrast',
  '-webkit-text-stroke': '1px var(--colors-hiContrast)',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
  lineHeight: 1,
  textAlign: 'right',
})
