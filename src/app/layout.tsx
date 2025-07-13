import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '../components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Athanasios Fytilis - Student Developer Portfolio',
  description: 'Full-stack developer specializing in modern web technologies',
  keywords: ['developer', 'portfolio', 'web development', 'react', 'nextjs','springboot','bootstrap','python','java'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}