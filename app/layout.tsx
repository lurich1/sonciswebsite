import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Soncis - Premium Leather Goods & Quality Products',
    template: '%s | Soncis'
  },
  description: 'Discover premium leather goods and quality products at Soncis. Shop genuine leather bags, accessories, and more. Free worldwide shipping available.',
  keywords: ['Soncis', 'leather goods', 'premium bags', 'leather accessories', 'Ghana', 'quality products'],
  authors: [{ name: 'Soncis' }],
  creator: 'Soncis',
  publisher: 'Soncis',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Soncis',
    title: 'Soncis - Premium Leather Goods & Quality Products',
    description: 'Discover premium leather goods and quality products at Soncis. Shop genuine leather bags, accessories, and more.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soncis - Premium Leather Goods & Quality Products',
    description: 'Discover premium leather goods and quality products at Soncis.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/photo_2025-11-02_05-35-41-removebg-preview.png', sizes: 'any' },
      { url: '/images/photo_2025-11-02_05-35-41-removebg-preview.png', type: 'image/png' },
    ],
    apple: [
      { url: '/images/photo_2025-11-02_05-35-41-removebg-preview.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/images/photo_2025-11-02_05-35-41-removebg-preview.png',
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
