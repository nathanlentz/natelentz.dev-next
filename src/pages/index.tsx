import type { NextPage } from 'next'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { NextSeo, NextSeoProps } from 'next-seo'
import { Box, Grid, H1 } from '@common/components'

const title = 'Home | Nate Lentz'
const SEO: NextSeoProps = {
  title,
  openGraph: {
    title,
  },
}

const Home: NextPage = () => {
  return (
    <>
      <NextSeo {...SEO} />
      <VisuallyHidden.Root>
        <h1>Home</h1>
      </VisuallyHidden.Root>
      <Grid css={{ p: '20vh 6vw', maxWidth: '1200px', margin: 'auto' }}>
        <H1 css={{ fontSize: '$9' }} weight="boldItalic">
          Nate Lentz
        </H1>
      </Grid>
      <Box css={{ height: '1800px' }} />
    </>
  )
}

export default Home
