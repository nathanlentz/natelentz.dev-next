

import {
  slate,
  slateDark,
} from '@radix-ui/colors';

import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css'
import { createFluidValue } from './create-fluid-value';

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

const colorsDark = {
  ...slateDark
} as const

const colorsLight = {
  ...slate
} as const

const themeVars = createGlobalThemeContract(
  {
    colors: {
      ...colorsDark,
      uiBg: null,
      text: null,
      surface1: null,
      surface2: null,
      primary: null
    },
  },
  (_, path) => path.join('-')
)

createGlobalTheme('html.dark-theme', themeVars, {
  colors: {
    ...colorsDark,
    uiBg: colorsDark.slate1,
    text: 'white',
    surface1: colorsDark.slate3,
    surface2: colorsDark.slate12,
    primary: '#78C4A1'
  },
})

createGlobalTheme('html.light-theme', themeVars, {
  colors: {
    ...colorsLight,
    uiBg: colorsLight.slate1,
    surface1: colorsLight.slate3,
    surface2: colorsLight.slate12,
    text: 'black',
    primary: '#78C4A1'
  },
})

const getConfigFluidValue = (minSize: number, maxSize: number) =>
  createFluidValue(minSize, maxSize, 360, 1024);

const tokenVars = createGlobalTheme(':root', {
  space: {
    none: '0',
    '3xs': getConfigFluidValue(4, 5),
    '2xs': getConfigFluidValue(8, 10),
    xs: getConfigFluidValue(12, 15),
    s: getConfigFluidValue(16, 20),
    m: getConfigFluidValue(24, 30),
    l: getConfigFluidValue(32, 40),
    xl: getConfigFluidValue(48, 60),
    '2xl': getConfigFluidValue(64, 80),
    '3xl': getConfigFluidValue(96, 120),
  },
  sizes: {
    prose: '60ch',
    full: '100%',
    channel: '700px',
    screenW: '100vw',
    screenH: '100vh',
    desktop: '1440px',
  },
  fonts: {
    primary: 'var(--poppins -font), sans-serif',
    serif: '"Untitled Serif", Georgia, serif',
    mono: '"Jetbrains Mono", monospace',
  },
  fontWeights: {
    extraBold: '800',
    bold: '700',
    regular: '400',
    light: '300'
  },
  fontSizes: {
    '1': getConfigFluidValue(13, 16),
    '2': getConfigFluidValue(16, 20),
    '3': getConfigFluidValue(20, 25),
    '4': getConfigFluidValue(25, 31),
    '5': getConfigFluidValue(31, 39),
    '6': getConfigFluidValue(39, 49),
    '7': getConfigFluidValue(49, 61),
    '8': getConfigFluidValue(61, 76),
    '9': getConfigFluidValue(76, 85),
    '10': getConfigFluidValue(85, 100),
  },
  lineHeights: {
    tight: '1',
    body: '1.5',
    loose: '2',
  },
})

export const theme = {
  vars: themeVars,
  tokens: tokenVars,
} as const
