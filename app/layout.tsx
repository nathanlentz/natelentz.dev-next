import './globals.css'
import { Poppins } from '@next/font/google';
import { cn } from '@/utils/cn'
import { ThemeProvider } from '@/components/theme-provider';
import { MainNav } from '@/components/main-nav';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"
      className={
        cn(
          'text-black bg-white dark:text-white dark:bg-[#202023]',
          poppins.variable
        )}
      >
      <head></head>
      <body>
        <MainNav />
        <main className="flex md:min-h-screen flex-col py-10">
          {children}
        </main>
      </body>
    </html>
  )
}
