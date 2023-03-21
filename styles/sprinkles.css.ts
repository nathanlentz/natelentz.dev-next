import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'
import { BREAKPOINTS, theme } from './theme.css'

const { tokens } = theme  

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' }
  },
  defaultCondition: 'mobile',
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
    alignContent: ['start', 'end', 'center'],
  }
})

export const sprinkles = createSprinkles(responsiveProperties)

export type Sprinkles = Parameters<typeof sprinkles>[0]
