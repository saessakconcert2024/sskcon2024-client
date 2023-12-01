import type { Metadata } from 'next'
import './globals.css'
import { suitRegular } from '@/_styles/fonts/fonts'
import Header from '@/taeheon/_components/Header/Header'

export const metadata: Metadata = {
  title: '새싹콘서트',
  description: '새싹콘서트 랜딩 페이지',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={suitRegular.className}>
        <Header />
        {children}
      </body>
      <body className={suitRegular.className}>{children}</body>
    </html>
  )
}
