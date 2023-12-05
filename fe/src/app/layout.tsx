import type { Metadata } from 'next'
import './globals.css'
import { suitRegular } from '@/_styles/fonts/fonts'

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
      <head>
        <script
          type="text/javascript"
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NAVER_MAP_API_KEY}`}
          async
        />
        <script
          type="text/javascript"
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NAVER_MAP_API_KEY}=geocoder`}
          async
        />
      </head>
      <body className={suitRegular.className}>{children}</body>
    </html>
  )
}
