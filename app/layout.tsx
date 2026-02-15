import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'SMH Groundworks Ltd | Professional Groundworks & Foundations in West Sussex',
  description: 'SMH Groundworks Ltd provides professional groundworks, foundations, drainage, patios, excavation and concrete bases across Steyning, Worthing, Brighton and surrounding areas in West Sussex.',
  keywords: ['groundworks', 'foundations', 'drainage', 'patios', 'excavation', 'concrete bases', 'West Sussex', 'Steyning', 'Worthing', 'Brighton'],
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={_inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
