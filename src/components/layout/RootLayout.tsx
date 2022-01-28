import { Nav } from './Nav'
import { Footer } from './Footer'
import { styled } from 'stitches.config'

export const RootLayout: React.FC = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
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
