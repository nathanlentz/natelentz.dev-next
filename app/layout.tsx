import './globals.css'
import localFont from '@next/font/local';
import { cn } from '@/utils/cn'

const poppins = localFont({
  src: '../public/fonts/Poppins-Bold.ttf',
  weight: '700',
  variable: '--font-poppins',
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
      <body className="max-w-4xl mb-40 flex flex-col md:flex-row lg:mx-auto">
        {children}
      </body>
    </html>
  )
}
