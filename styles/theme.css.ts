import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css'

export const BREAKPOINTS = {
  bp1: '(width >= 520px)',
  '<bp1': '(width < 519px)',
  bp2: '(width >= 768px)',
  '<bp2': '(width < 767px)',
  bp3: '(width >= 1040px)',
  '<bp3': '(width < 1039px)',
  bp4: '(width >= 1800px)',
  '<bp4': '(width < 1799px)',
} as const;

const themeVars = createGlobalThemeContract(
  {
    colors: {
      uiBg: null,
    },
  },
  (_, path) => path.join('-')
)

createGlobalTheme('html.dark-theme', themeVars, {
  colors: {
    uiBg: 'black',
  },
})

createGlobalTheme('html.light-theme', themeVars, {
  colors: {
    uiBg: 'white',
  },
})

const tokenVars = createGlobalTheme(':root', {
  fonts: {
    primary: 'var(--inter-font), sans-serif',
    serif: '"Untitled Serif", Georgia, serif',
    mono: '"Jetbrains Mono", monospace',
  },
})

export const theme = {
  theme: themeVars,
  tokens: tokenVars,
} as const
