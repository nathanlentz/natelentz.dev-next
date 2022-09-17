import { Nav } from './Nav'
import { Footer } from './Footer'
import { styled } from 'stitches.config'

export const RootLayout: React.FC = ({ children }) => {
  return (
    <div className="root-layout">
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

const Main = styled('main', {
  flex: '1',
  zIndex: 1,
})
