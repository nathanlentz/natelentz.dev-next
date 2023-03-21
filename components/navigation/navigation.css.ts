import { style } from '@vanilla-extract/css'

import { sprinkles } from '@/styles/sprinkles.css'
import { theme } from '@/styles/theme.css'

const root = style([
  {
    width: '100%',
    marginTop: '32px',
    position: 'fixed',
    zIndex: 9999
  },
  sprinkles({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  })
])

const wrapper = style({
  backgroundColor: theme.vars.colors.uiBg,
  border: '2px solid',
  borderRadius: '48px',
})

const navList = style([
  {
    padding: '8px'
  },
  sprinkles({
    display: 'flex',
    alignItems: 'center'
  })
])

const navItem = style([
  sprinkles({
    fontWeight: 'bold'
  }),
  {
    marginRight: '24px',
    ':hover': {
      textDecoration: 'underline'
    }
  }
])

const activeNavItem = style({
  backgroundColor: 'white',
  color: 'black',
  borderRadius: '48px'
})

const location = style({
  marginRight: '24px'
})

const homeIcon = style({
  borderRadius: '50%',
  height: '31px',
  width: '31px',
  backgroundColor: theme.vars.colors.primary
})

export const navStyles = {
  root,
  wrapper,
  navList,
  navItem,
  homeIcon,
  location,
  activeNavItem
} as const
