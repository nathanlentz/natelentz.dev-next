import { Nav } from './Nav'
import { Footer } from './Footer'
import { styled } from 'stitches.config'
import { MobileNav } from './MobileNav'

export const RootLayout: React.FC = ({ children }) => {
  return (
    <>
      <Nav />
      <MobileNav />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

const Main = styled('main', {
  flex: '1',
  zIndex: 1,
})
