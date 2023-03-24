import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'
import { BREAKPOINTS, theme } from './theme.css'

const { tokens, vars } = theme  

const responsiveProperties = defineProperties({
  defaultCondition: 'initial',
  conditions: {
    initial: {},
    bp1: { '@media': 'screen and (min-width: 640px)'},
    bp2: { '@media': 'screen and (min-width: 768px)' },
    bp3: { '@media': 'screen and (min-width: 1024px)' }
  },
  properties: {
    position: ['relative', 'absolute', 'fixed', 'sticky'],
    display: [
      'none',
      'flex',
      'grid',
      'block',
      'inline',
      'inline-block',
      'inline-grid',
      'inline-flex',
    ],
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    justifyItems: ['start', 'end', 'center', 'stretch'],
    justifyContent: [
      'stretch',
      'flex-start',
      'start',
      'center',
      'flex-end',
      'end',
      'space-around',
      'space-between',
    ],
    alignItems: [
      'baseline',
      'stretch',
      'flex-start',
      'start',
      'end',
      'center',
      'flex-end',
    ],
    height: tokens.sizes,
    width: tokens.sizes,
    maxHeight: tokens.sizes,
    maxWidth: tokens.sizes,
    minHeight: tokens.sizes,
    minWidth: tokens.sizes,
    textAlign: ['left', 'center', 'right'],
    alignContent: ['start', 'end', 'center'],
    fontSize: theme.tokens.fontSizes,
  }
})

const nonResponsiveProperties = defineProperties({
  properties: {
    // borderRadius: tokens.radii,
    // zIndex: tokens.zIndices,
    lineHeight: tokens.lineHeights,
    fontWeight: tokens.fontWeights,
    // transition: tokens.transitions,
    fontFamily: tokens.fonts,
    flexWrap: ['wrap', 'nowrap'],
    top: tokens.space,
    bottom: tokens.space,
    left: tokens.space,
    right: tokens.space,
    shorthands: {
      inset: ['top', 'bottom', 'left', 'right'],
    },
  },
});

const interactiveProperties = defineProperties({
  defaultCondition: 'initial',
  conditions: {
    initial: {},
    hover: { selector: '&:hover' },
  },
  properties: {
    color: vars.colors,
    backgroundColor: vars.colors,
  },
});

export const sprinkles = createSprinkles(responsiveProperties, nonResponsiveProperties, interactiveProperties)

export type Sprinkles = Parameters<typeof sprinkles>[0]
