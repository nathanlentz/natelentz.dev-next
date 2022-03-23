import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useIsMounted } from '@utils/common/hooks'
import { styled } from 'stitches.config'
import { buttonReset } from '../Button'

export const MobileNav: React.FC = () => {
  const isMounted = useIsMounted()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = ''
    }
  }, [])

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      document.body.style.overflow = ''
    } else {
      setIsMenuOpen(true)
      document.body.style.overflow = 'hidden'
    }
  }

  if (!isMounted) return null

  return (
    <MobileNavWrapper>
      <MobileNavButton
        type="button"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <MenuIcon data-hide={isMenuOpen} />
        <XIcon data-hide={!isMenuOpen} />
      </MobileNavButton>
      {isMenuOpen && (
        <Menu>
          <MenuItem>Writing</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Work</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
      )}
    </MobileNavWrapper>
  )
}

const MobileNavWrapper = styled('div', {
  '@bpmd': {
    display: 'none',
  },
})

const MobileNavButton = styled('button', buttonReset, {
  position: 'fixed',
  zIndex: '100',
  '&:hover': {
    boxShadow: 'none',
  },
})

const Menu = styled(motion.ul, {
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  background: '$loContrast',
  padding: '$3xl $s',
  zIndex: '99',
})

const MenuItem = styled(motion.li, {
  fontSize: '$7',
  fontWeight: '$bold',
  color: '$loContrast',
  '-webkit-text-stroke': '1.5px var(--colors-hiContrast)',
  textTransform: 'uppercase',
})

function MenuIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      color="var(--colors-hiContrast)"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M28.3333 16.6667H5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 10H5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 23.3333H5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.3333 30H5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function XIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      color="var(--colors-hiContrast)"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30 10L10 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10L30 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
