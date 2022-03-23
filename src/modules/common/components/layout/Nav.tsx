import { useEffect, useState } from 'react'
import { motion, useViewportScroll } from 'framer-motion'
import { styled } from 'stitches.config'
import { Box, ThemeToggle } from '..'
import { ListItem } from '../Text'
import { MobileNav } from './MobileNav'

export const Nav: React.FC = () => {
  const { scrollY } = useViewportScroll()
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const unsubscribeY = scrollY.onChange((value) => {
      if (value > 100) {
        setIsOpen(false)
      } else if (value <= 100) {
        setIsOpen(true)
      }
    })

    return () => {
      unsubscribeY()
    }
  }, [scrollY])

  return (
    <>
      <NavWrapper initial={false} animate={isOpen ? 'open' : 'closed'}>
        <NavList variants={ulVariants}>
          <NavListItem variants={liVariants}>Home</NavListItem>
          <NavListItem variants={liVariants}>About</NavListItem>
          <NavListItem variants={liVariants}>Blog</NavListItem>
          <Box variants={liVariants} css={{ padding: '$2xs' }}></Box>
        </NavList>
        <MobileNav />
      </NavWrapper>
      <MenuButton
        variants={buttonVariants}
        onClick={() => setIsOpen(true)}
        initial={false}
        animate={!isOpen ? 'show' : 'hide'}
      ></MenuButton>
      <Box css={{ position: 'fixed', top: '2.8571vw', right: '2.8571vw' }}>
        <ThemeToggle />
      </Box>
    </>
  )
}

const NavWrapper = styled(motion.nav, {
  position: 'fixed',
  top: '2.8571vw',
  left: '2.8571vw',
})

const NavList = styled(motion.ul, {
  display: 'none',

  '@bpmd': {
    display: 'block',
  },
})

const NavListItem = styled(ListItem, {
  p: '$2xs',
  position: 'relative',

  '&:hover': {
    cursor: 'pointer',
  },

  '&:before': {
    content: ' ',
    transition: 'transform .4s',
    position: 'absolute',
    right: '100%',
    top: '50%',
    height: '1px',
    width: '2.8571vw',
    transform: 'translate3d(-101%,0,0)',
    background: '$hiContrast',
  },

  '&:hover:before': {
    transform: 'translate3d(-20%,0,0) scaleX(.8);',
  },
})

const MenuButton = styled(motion.button, {
  position: 'fixed',
  top: '2.8571vw',
  left: '2.8571vw',
  background: 'none',
  border: 0,
  boxShadow: 'none',
  cursor: 'pointer',
  backgroundColor: '$primary',
  borderRadius: '50%',
  height: '50px',
  width: '50px',
  color: '$dark',
  display: 'none',

  '@bpmd': {
    display: 'block',
  },
})

/* Framer Motion Variants */
const ulVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 25,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const buttonVariants = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hide: {
    y: -25,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}
