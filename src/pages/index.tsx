import type { NextPage } from 'next'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { NextSeo, NextSeoProps } from 'next-seo'
import { Box } from '@common/components'

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
    </>
  )
}

export default Home
