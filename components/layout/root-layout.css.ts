import { sprinkles } from '@/styles/sprinkles.css'
import { style } from '@vanilla-extract/css'

export const container = style([
  sprinkles({
    width: 'full',
    backgroundColor: 'uiBg',
    height: 'full',
    minHeight: 'screenH',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  })
])

export const wrapper = style([
  {
    marginTop: '80px'
  },
  sprinkles({
    maxWidth: 'channel',
    width: 'full',
    height: 'full',
    minHeight: 'screenH',
    position: 'relative',
  })
])

export const main = style({
  maxWidth: ''
})
