import { style } from '@vanilla-extract/css'

import { sprinkles } from '@/styles/sprinkles.css'

const root = style([
  {
    width: '100%',
    marginTop: '8px'
  },
  sprinkles({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  })
])

const wrapper = style({
  border: '2px solid',
  borderRadius: '48px',
})

const navList = style([
  {
    paddingLeft: '8px',
    paddingRight: '8px'
  },
  sprinkles({
    display: 'flex'
  })
])

const navItem = style({
})

export const navStyles = {
  root,
  wrapper,
  navList,
  navItem
} as const
