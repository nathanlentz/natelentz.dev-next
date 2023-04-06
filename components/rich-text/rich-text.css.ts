import { theme } from '@/styles/theme.css';
import { sprinkles } from '@/styles/sprinkles.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const inlineElementReset = style({
  fontSize: 'inherit',
  color: 'inherit',
  lineHeight: 'inherit',
});

export const unorderedList = style([
  {
    listStyleType: 'disc',
  },
  sprinkles({
    color: 'text',
    paddingLeft: 'm',
    marginBottom: 'm',
  }),
]);

globalStyle(`${unorderedList} ul`, {
  paddingLeft: theme.tokens.space.m,
});

globalStyle(`${unorderedList} ul, ol`, {
  marginBottom: theme.tokens.space['2xs'],
});

export const orderedList = style([
  unorderedList,
  {
    listStyleType: 'decimal',
  },
]);

export const listItem = style([
  sprinkles({
    marginLeft: 'none',
    marginBottom: 'xs',
    paddingLeft: 'none',
  }),
  {
    ':last-of-type': {
      marginBottom: 0,
    },
  },
]);

globalStyle(`${listItem} > ul li:first-of-type, ol li:first-of-type`, {
  paddingTop: theme.tokens.space.xs,
});