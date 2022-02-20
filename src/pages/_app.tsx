import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { lightTheme } from 'stitches.config'
import { RootLayout } from '@common/components/layout'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
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
