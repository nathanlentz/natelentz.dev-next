import { css } from 'stitches.config'

export const buttonReset = css({
  border: 'none',
  m: 0,
  p: 0,
  width: 'auto',
  overflow: 'visible',
  background: 'transparent',
  color: 'inherit',
  lineHeight: 'normal',
  fontSmooth: 'inherit',
  appearance: 'none',
  cursor: 'pointer',
  transitionDuration: 'var(--transitions-duration)',
  transitionTimingFunction: 'var(--transitions-timingFunction)',
  transition: 'all',

  '&:focus': {
    outline: 'none',
    boxShadow: '$focus',
  },

  '&:hover': {
    outline: 'none',
    boxShadow: '$focus',
  },
})
