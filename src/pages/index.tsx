import type { NextPage, GetStaticProps } from 'next'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { Grid } from '@common/components'
import { Container } from '@common/components/Container'
import { Hero } from '@home/components/Hero'
import { RecentWriting } from '@home/components/RecentWriting'

const Home: NextPage = () => {
  return (
    <Container>
      <VisuallyHidden.Root>
        <h1>Home</h1>
      </VisuallyHidden.Root>
      <Grid css={{ p: '20vh 5vw', maxWidth: '1200px', margin: 'auto' }}>
        <Hero />
        {/* <WordList /> */}
        <RecentWriting />
      </Grid>
    </Container>
  )
}

export const getStaticProps: GetStaticProps<{
  recentWritings: any[]
}> = () => {
  return {
    props: { recentWritings: [] },
  }
}

export default Home
