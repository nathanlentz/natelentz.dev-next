import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { Box, Grid, H1 } from '@common/components'
import { Container } from '@common/components/Container'
import { styled } from 'stitches.config'

const Writings = () => {
  return (
    <Container>
      <VisuallyHidden.Root>
        <h1>Writing</h1>
      </VisuallyHidden.Root>
      <Grid css={{ p: '20vh 6vw', maxWidth: '1200px', margin: 'auto' }}>
        Writing
      </Grid>
      <Box css={{ height: '1800px' }} />
    </Container>
  )
}

export default Writings
