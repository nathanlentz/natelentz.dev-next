import type * as Stitches from '@stitches/react'
import { config, styled } from 'stitches.config'

const child = '> *'
const childWithGap = '> * + *'

const { space } = config.theme
type TSpaceKey = keyof typeof space

const gap = Object.keys(space).reduce(
  (acc, cv) => ({
    ...acc,
    [cv]: { [childWithGap]: { $$stackGap: `$space$${cv}` } },
  }),
  {}
) as { [key in TSpaceKey]: Stitches.CSS }

export const Stack = styled('div', {
  display: 'flex',
  listStyleType: 'none',
  paddingLeft: 0,

  [child]: {
    margin: 0,
  },

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        [childWithGap]: {
          margin: '0 0 0 $$stackGap',
        },
      },
      'row-reverse': {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        [childWithGap]: {
          margin: '0 $$stackGap 0 0',
        },
      },
      column: {
        flexDirection: 'column',
        [childWithGap]: {
          margin: '$$stackGap 0 0 0',
        },
      },
      'column-reverse': {
        flexDirection: 'column-reverse',
        [childWithGap]: {
          margin: '0 0 $$stackGap 0',
        },
      },
    },
    gap,
  },

  defaultVariants: {
    gap: 's',
    direction: 'column',
  },
})
