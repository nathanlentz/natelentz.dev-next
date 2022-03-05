import React from 'react'

import { useTheme } from 'next-themes'
import { styled } from 'stitches.config'
import { useIsMounted } from '@utils/common/hooks'
import { buttonReset } from './Button'

type Theme = 'light' | 'dark' | 'system'

export const ThemeToggle: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const isMounted = useIsMounted()

  if (!isMounted) {
    return null
  }

  return (
    <ThemeButton
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
    >
      {isMounted && (
        <ThemeIcon
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          {resolvedTheme === 'dark' ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          )}
        </ThemeIcon>
      )}
    </ThemeButton>
  )
}

const ThemeButton = styled('button', buttonReset, {
  width: '2.25rem',
  height: '2.25rem',
  transition: 'all',
  borderRadius: '$curved',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$slate7',
  transitionTimingFunction: 'var(--transitions-timingFunction)',
  transitionDuration: 'var(--transitions-duration)',

  '&:hover': {
    boxShadow: '$focus',
  },
})

const ThemeIcon = styled('svg', {
  width: '1.25rem',
  height: '1.25rem',
  color: '$hiContrast',
})
