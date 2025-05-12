import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ryan Majd',
  description: 'Portfolio of Ryan Majd – full-stack software engineer, KTP founder, and TravelByte CTO. Built with Next.js, React, and Vercel v0.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
