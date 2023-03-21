'use client'

import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import { navStyles } from './navigation.css'
import ThemeToggle from '../theme-toggle/theme-toggle'
import { useRouter } from 'next/router'

const Navigation = () => {
  const router = useRouter()

  return (
    <div className={navStyles.root}>
      <NavigationMenu.Root className={navStyles.wrapper}>
        <NavigationMenu.List className={navStyles.navList}>
          <NavigationMenu.Item className={navStyles.navItem}>
            <Link href="/">
              <div className={navStyles.homeIcon}>
                <VisuallyHidden.Root>Home</VisuallyHidden.Root>
              </div>
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className={`${navStyles.navItem} ${router.pathname === '/writing' ? navStyles.activeNavItem : ''}`}>
            <Link href="/writing">
              Writing
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className={navStyles.navItem}>
            <Link href="/uses" className="">
              Uses
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className={navStyles.navItem}>
            <Link href="/reviews" className="">
              Contact
            </Link>
          </NavigationMenu.Item>
          <li className={navStyles.location}>
            14:24 Allendale, MI
          </li>
          <ThemeToggle />
        </NavigationMenu.List>
      </NavigationMenu.Root>

    </div>
  )
}

export default Navigation
