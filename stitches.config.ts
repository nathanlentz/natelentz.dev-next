import { createStitches } from '@stitches/react'

export const { config, styled, getCssText, theme, createTheme, css } =
  createStitches({
    theme: {
      fonts: {},
      colors: {},
      shadows: {},
      transitions: {},
      fontWeights: {},
      fontSizes: {},
      space: {},
      sizes: {},
      media: {
        bp1: '(width >= 520px)',
        bp2: '(width >= 768px)',
        bp3: '(width >= 1040px)',
        bp4: '(width >= 1800px)',
        motion: '(prefers-reduced-motion)',
        hover: '(any-hover: hover)',
        dark: '(prefers-color-scheme: dark)',
        light: '(prefers-color-scheme: light)',
      },
    },
  })

export const lightTheme = createTheme({
  colors: {},
})
