import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { RootLayout } from '@components/layout/RootLayout'
import { lightTheme } from 'stitches.config'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute='class'
      value={{ dark: 'dark-theme', light: lightTheme.className }}
      defaultTheme={'system'}
    >
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ThemeProvider>
  )
}

export default MyApp
