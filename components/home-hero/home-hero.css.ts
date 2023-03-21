import { style } from '@vanilla-extract/css'
import { sprinkles } from '@/styles/sprinkles.css'
import { text } from '@/styles/primitives/text.css'

export const wrapper = style([
  {
    marginTop: '80px',
    marginBottom: '80px'
  },
  sprinkles({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  })
])

export const heroText = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column'
  }),
  text({size: '9', weight: 'bold'}),
  {
    lineHeight: .9,
    fontStyle: 'italic'
  }
])
