import { css, styled } from 'stitches.config'
import { motion } from 'framer-motion'

export const text = css({
  variants: {
    size: {
      1: { fontSize: '$1' },
      2: { fontSize: '$2' },
      3: { fontSize: '$3' },
      4: { fontSize: '$4' },
      5: { fontSize: '$5' },
      6: { fontSize: '$6' },
      7: { fontSize: '$7' },
      8: { fontSize: '$8' },
      9: { fontSize: '$9' },
    },
    color: {
      1: { color: '$text1' },
      2: { color: '$text2' },
      3: { color: '$text3' },
      4: { color: '$text4' },
    },
    weight: {
      bold: { fontWeight: '$bold' },
      regular: { fontWeight: '$regular' },
      boldItalic: { fontWeight: '$bold', fontStyle: 'italic' },
    },
    leading: {
      tight: { lineHeight: '$tight' },
      body: { lineHeight: '$body' },
      loose: { lineHeight: '$loose' },
    },
    family: {
      primary: {
        fontFamily: '$primary',
      },
      serif: {
        fontFamily: '$serif',
        fontStyle: 'italic',
      },
    },
  },
  defaultVariants: {
    color: 1,
    family: 'primary',
    weight: 'regular',
  },
})

export const Text = styled('span', text)
export const H1 = styled('h1', text)
export const H2 = styled('h2', text)
export const H3 = styled('h3', text)
export const H4 = styled('h4', text)
export const H5 = styled('h5', text)
export const H6 = styled('h6', text)
export const Quote = styled('q', text)
export const ListItem = styled(motion.li, text)
export const Paragraph = styled('p', text)
