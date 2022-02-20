import { DefaultSeo } from 'next-seo'

import { Nav } from './Nav'
import { Footer } from './Footer'
import { styled } from 'stitches.config'

export const RootLayout: React.FC = ({ children }) => {
  return (
    <>
      <DefaultSeo />
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

const Container = styled('div', {
  width: '$full',
  minHeight: '$sh',
  d: 'flex',
  ai: 'center',
  flexFlow: 'column',
  height: '$full',
  px: '$s',
})

const Main = styled('main', {
  flex: '1',
  zIndex: 1,
})
