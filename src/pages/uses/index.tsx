import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { Box, Grid, Container, H1, AnimateEntry, Text } from '@common/components'

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
        <Box css={{ height: '1800px', textAlign: 'center' }}>
          <Text>Come back soon!</Text>
        </Box>
      </Grid>
    </Container>
  )
}

export default Uses
