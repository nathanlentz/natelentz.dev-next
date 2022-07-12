import { Box, Grid, Container, H1, AnimateEntry } from '@common/components'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const Uses: React.FC = () => {
  return (
    <Container>
      <VisuallyHidden>
        <h1>Uses</h1>
      </VisuallyHidden>
      <Grid
        css={{
          p: '20vh 6vw',
          maxWidth: '1200px',
          margin: 'auto',
        }}
      >
        <AnimateEntry direction="from-bottom">
          <Box css={{ textAlign: 'center' }}>
            <H1>Uses</H1>
          </Box>
        </AnimateEntry>
      </Grid>
      <Box css={{ height: '1800px' }} />
    </Container>
  )
}

export default Uses
