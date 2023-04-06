import { globalStyle } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils';
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

/*
 * Code syntax
 */

globalStyle(
  'html.dark-theme div[data-theme="light"], html.dark-theme pre[data-theme="light"], html.dark-theme code[data-theme="light"]',
  {
    display: 'none',
  },
);

globalStyle(
  'html.light-theme div[data-theme="dark"], html.light-theme pre[data-theme="dark"], html.light-theme code[data-theme="dark"]',
  {
    display: 'none',
  },
);

globalStyle('[data-rehype-pretty-code-title]', {
  padding: `${theme.tokens.space.s} ${theme.tokens.space.m}`,
  backgroundColor: theme.vars.colors.surface1,
  border: '1px solid',
  borderColor: theme.vars.colors.slate8,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
});

globalStyle('pre[data-language]', {
  whiteSpace: 'pre',
  backgroundColor: theme.vars.colors.surface1,
  fontSize: calc(theme.tokens.fontSizes[1]).multiply(0.95).toString(),
  WebkitTextSizeAdjust: 'none',
  fontFamily: theme.tokens.fonts.mono,
});

globalStyle(':not(pre)>code', {
  whiteSpace: 'pre',
  backgroundColor: theme.vars.colors.surface1,
  padding: '0.25rem',
  fontSize: calc(theme.tokens.fontSizes[1]).multiply(0.9).toString(),
  WebkitTextSizeAdjust: 'none',
  fontFamily: theme.tokens.fonts.mono,
});

globalStyle('[data-rehype-pretty-code-title] + pre[data-language]', {
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderTop: 0,
});

globalStyle('div[data-rehype-pretty-code-fragment] code', {
  display: 'grid',
});

globalStyle('div[data-rehype-pretty-code-fragment] pre', {
  overflowX: 'auto',
  paddingTop: theme.tokens.space.m,
  paddingBottom: theme.tokens.space.m,
});

globalStyle('div[data-rehype-pretty-code-fragment] .syntax-line', {
  borderLeft: '4px solid',
  borderLeftColor: 'transparent',
  paddingRight: theme.tokens.space.m,
  paddingLeft: theme.tokens.space.m,
});

/* Numbered lines */
globalStyle('code[data-line-numbers]', {
  counterReset: 'line',
});

globalStyle('code[data-line-numbers] .syntax-line::before', {
  counterIncrement: 'line',
  content: 'counter(line)',
  display: 'inline-block',
  textAlign: 'right',
  marginRight: theme.tokens.space.m,
  opacity: 0.5,
});