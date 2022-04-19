import type { NextPage } from 'next'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { Box, Grid, H1 } from '@common/components'
import { Container } from '@common/components/Container'

const Contact: NextPage = () => {
  return (
    <Container>
      <VisuallyHidden.Root>
        <h1>Contact</h1>
      </VisuallyHidden.Root>
      <Grid css={{ p: '20vh 5vw', maxWidth: '1200px', margin: 'auto' }}></Grid>
    </Container>
  )
}

export default Contact
