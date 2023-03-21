import { theme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const themeButton = style({
  width: '2.25rem',
  height: '2.25rem',
  transition: 'all',
  borderRadius: '50%',
  border: 'none',
  background: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':hover': {
    cursor: 'pointer',
    background: theme.vars.colors.slate3
  }
})

export const iconButton = style({
  width: '1.5rem',
  height: '1.5rem'
})