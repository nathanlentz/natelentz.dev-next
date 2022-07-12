import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { AnimateEntry, Box, Grid, H1 } from '@common/components'
import { Container } from '@common/components/Container'

const Writings = () => {
  return (
    <Container>
      <VisuallyHidden.Root>
        <h1>Writing</h1>
      </VisuallyHidden.Root>
      <Grid css={{ p: '20vh 6vw', maxWidth: '1200px', margin: 'auto' }}>
        <AnimateEntry direction="from-bottom">
          <Box css={{ textAlign: 'center' }}>
            <H1>Writing</H1>
          </Box>
        </AnimateEntry>
      </Grid>
      <Box css={{ height: '1800px' }} />
    </Container>
  )
}

export default Writings
