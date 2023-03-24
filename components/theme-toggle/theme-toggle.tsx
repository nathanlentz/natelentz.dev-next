import React from 'react'

import { useIsMounted } from '@/utils/hooks/use-is-mounted'
import { themeButton, iconButton } from './theme-toggle.css'
import { useTheme } from 'next-themes'

const ThemeToggle = () => {
  const isMounted = useIsMounted()
  const { theme, setTheme } = useTheme()

  if(!isMounted) {
    return null
  }

  return (
    <>
      <button className={themeButton} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {isMounted && (
          <svg
            className={iconButton}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            { theme === 'light' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
            )}
          </svg>
        )}
      </button>
    </>
  )
}

export default ThemeToggle