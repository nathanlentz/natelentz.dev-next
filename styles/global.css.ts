import { globalStyle } from '@vanilla-extract/css'
import { theme } from './theme.css'

globalStyle(
  'html, body, p, ol, ul, li, dl, dt, dd, blockquote, figure, fieldset, legend, textarea, pre, iframe, hr, h1, h2, h3, h4, h5, h6',
  {
    margin: 0,
    padding: 0,
  },
);

globalStyle('html, body', {
  // fontFamily: theme.tokens.fonts.primary,
  backgroundColor: theme.vars.colors.uiBg,
  margin: 0,
})

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontSize: '100%',
  fontWeight: 'normal',
})

globalStyle('ul', {
  listStyle: 'none',
})

globalStyle('a', {
  textDecoration: 'none',
  color: theme.vars.colors.text
})

globalStyle('a:visited', {
  color: theme.vars.colors.text
})