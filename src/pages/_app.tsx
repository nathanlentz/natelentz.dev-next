import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '../styles/global.css'
import { RootLayout } from '@components/layout/RootLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ThemeProvider>
  )
}

export default MyApp
