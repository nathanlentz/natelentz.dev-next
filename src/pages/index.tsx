import type { NextPage } from 'next'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { Box, Grid, H1 } from '@common/components'
import { Container } from '@common/components/Container'
import { styled } from 'stitches.config'

const Home: NextPage = () => {
  return (
    <Container>
      <VisuallyHidden.Root>
        <h1>Home</h1>
      </VisuallyHidden.Root>
      <Grid css={{ p: '20vh 6vw', maxWidth: '1200px', margin: 'auto' }}>
        <Hero weight="boldItalic">Nate Lentz</Hero>
      </Grid>
      <Box css={{ height: '1800px' }} />
    </Container>
  )
}

const Hero = styled(H1, {
  fontSize: '$8',
  '@bpmd': { fontSize: '$9' },
})

export default Home
