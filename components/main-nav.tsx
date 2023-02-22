"use client"

import Link from "next/link"
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

interface MainNavProps {

}

export const MainNav = ({}: MainNavProps) => {
  return (
    <div className="fixed z-[9999] w-full flex justify-center items-center">
      <NavigationMenu.Root className="border border-solid border-gray-700 dark:bg-white dark:text-black w-11/12 md:w-fit flex p-1 gap-6 rounded-full mt-4 shadow-xl">
        <NavigationMenu.List className="flex gap-0 h-9 items-center w-full justify-between md:justify-start">
          <NavigationMenu.Item>
            <Link href="/">
              <div className="w-9 h-9 flex items-center justify-center bg-mint-400 rounded-full mr-2 hover:bg-mint-500">
                <VisuallyHidden.Root>Home</VisuallyHidden.Root>
              </div>
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link href="/writing" className="font-light px-4 hover:underline">Writing</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link href="/uses" className="font-light px-4 hover:underline">Uses</Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  )
}