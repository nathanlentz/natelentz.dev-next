import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'
import { slate, slateDark } from '@radix-ui/colors'

export const { config, styled, getCssText, theme, createTheme, css } =
  createStitches({
    theme: {
      fonts: {
        primary: '"Poppins", sans-serif',
        serif: '',
      },
      colors: {
        primary: '#78C4A1',
        loContrast: '#202023',
        hiContrast: '#FBFCFD',
        text1: '$hiContrast',
        text2: '$loContrast',
        ...slateDark,
      },
      shadows: {
        focus: '0 0 0 3px var(--colors-slate10)',
      },
      transitions: {
        duration: '.15s',
        timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      radii: {
        none: 0,
        round: '50%',
        curved: '0.5rem',
        pill: '9999px',
      },
      fontWeights: {
        regular: 400,
        bold: 700,
      },
      lineHeights: {
        tight: 1,
        body: 1.5,
        loose: 2,
      },
      fontSizes: {
        1: 'clamp(0.80rem, 0.69rem + 0.48vw, 1.00rem)',
        2: 'clamp(1.00rem, 0.86rem + 0.60vw, 1.25rem)',
        3: 'clamp(1.25rem, 1.08rem + 0.75vw, 1.56rem)',
        4: 'clamp(1.56rem, 1.35rem + 0.94vw, 1.95rem)',
        5: 'clamp(1.95rem, 1.69rem + 1.18vw, 2.44rem)',
        6: 'clamp(2.44rem, 2.11rem + 1.47vw, 3.05rem)',
        7: 'clamp(3.05rem, 2.64rem + 1.84vw, 3.82rem)',
        8: 'clamp(3.82rem, 3.30rem + 2.30vw, 4.77rem)',
        9: 'clamp(4.77rem, 4.00rem + 2.90vw, 5.56rem)',
        10: 'clamp(5.56em, 5.50rem + 3.40vw, 6.60rem)',
      },
      space: {
        '3xs': '4px',
        '2xs': '8px',
        xs: '12px',
        s: '16px',
        m: '24px',
        l: '32px',
        xl: '48px',
        '2xl': '64px',
        '3xl': '96px',
      },
      sizes: {
        full: '100%',
        channel: '700px',
        vw: '100vw',
        sh: '100vh',
        desktop: '1440px',
      },
    },
    media: {
      bpsm: '(min-width: 640px)',
      bpmd: '(min-width: 768px)',
      bplg: '(min-width: 1024px)',
      bpxl: '(min-width: 1280px)',
      motion: '(prefers-reduced-motion)',
      hover: '(any-hover: hover)',
      dark: '(prefers-color-scheme: dark)',
      light: '(prefers-color-scheme: light)',
    },
    utils: {
      p: (value: Stitches.PropertyValue<'padding'>) => ({
        padding: value,
      }),
      px: (value: Stitches.PropertyValue<'padding'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: Stitches.PropertyValue<'padding'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      m: (value: Stitches.PropertyValue<'margin'>) => ({
        margin: value,
      }),
      mx: (value: Stitches.PropertyValue<'margin'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: Stitches.PropertyValue<'margin'>) => ({
        marginTop: value,
        marginBottom: value,
      }),
      gtc: (value: Stitches.PropertyValue<'gridTemplateColumns'>) => ({
        gridTemplateColumns: value,
      }),
    },
  })

export const lightTheme = createTheme({
  colors: {
    ...slate,
    hiContrast: '#202023',
    loContrast: '#FBFCFD',
  },
})
