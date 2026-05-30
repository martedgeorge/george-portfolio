import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'George Marte | Graphic Designer & Art Director',
  description: 'Portfolio of George Marte, a graphic designer and aspiring art director creating memorable brand experiences.',
  keywords: 'graphic design, art direction, branding, portfolio, creative design',
  authors: [{ name: 'George Marte' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'George Marte | Graphic Designer & Art Director',
    description: 'Premium portfolio showcasing bold, memorable design work.',
    type: 'website',
    url: 'https://georgedmarte.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-deep-navy text-off-white antialiased">
        {children}
      </body>
    </html>
  )
}
