import { globalStyle } from '@vanilla-extract/css'
import { theme } from './theme.css'

globalStyle('html, body', {
  // fontFamily: theme.tokens.fonts.primary,
  backgroundColor: theme.theme.colors.uiBg,
  margin: 0,
})

globalStyle('ul', {
  listStyle: 'none',
})
