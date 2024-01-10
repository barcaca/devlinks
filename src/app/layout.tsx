import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { Providers } from './providers'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  authors: [{ name: 'Luan Barcaça', url: '' }],
  category: 'design',
  creator: 'Luan Barcaça',
  title: 'DevLinks',
  description: 'DevLinks List',
  keywords: [
    'Next.js',
    'React',
    'TypeScript',
    'TailwindCSS',
    'Design',
    'Frontend',
    'Developer',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-mobileLight bg-cover bg-top dark:bg-mobile lg:bg-desktopLight lg:dark:bg-desktop">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
