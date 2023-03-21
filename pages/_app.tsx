import { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { RootLayout } from '@/components/layout/root-layout'
import '@/styles/global.css'

const inter = Inter({ subsets: ['latin'] })

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ dark: 'dark-theme', light: 'light-theme' }}
      enableSystem
    >
      <div className={inter.className}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
