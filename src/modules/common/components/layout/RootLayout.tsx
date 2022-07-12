import { Nav } from './Nav'
import { Footer } from './Footer'
import { styled } from 'stitches.config'

export const RootLayout: React.FC = ({ children }) => {
  return (
    <>
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

const Main = styled('main', {
  flex: '1',
  zIndex: 1,
})
