import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/navbar.component'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>De Sean Ward | Fullstack Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
      </head>

      <body className={inter.className}>
        <Navbar />
        {children} 
      </body>
    </html>
  )
}
