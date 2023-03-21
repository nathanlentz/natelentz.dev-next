'use client'

import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import { navStyles } from './navigation.css'

const Navigation = () => {
  return (
    <div className={navStyles.root}>
      <NavigationMenu.Root className={navStyles.wrapper}>
        <NavigationMenu.List className={navStyles.navList}>
          <NavigationMenu.Item className={navStyles.navItem}>
            <Link href="/">
              <div className="">
                <VisuallyHidden.Root>Home</VisuallyHidden.Root>
              </div>
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className={navStyles.navItem}>
            <Link href="/writing" className="">
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
        </NavigationMenu.List>
      </NavigationMenu.Root>

    </div>
  )
}

export default Navigation
