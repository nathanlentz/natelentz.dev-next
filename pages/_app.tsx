import { AppProps } from 'next/app'
import { Inter, Poppins } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { RootLayout } from '@/components/layout/root-layout'
import '@/styles/global.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic']
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ dark: 'dark-theme', light: 'light-theme' }}
    >
      <div className={poppins.className}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
