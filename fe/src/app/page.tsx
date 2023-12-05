import NaverMap from '@/components/NaverMap'
import Session from '@/components/Session'

declare global {
  interface Window {
    naver: any
  }
}

export default function Home() {
  return (
    <div
      style={{
        display: 'grid',
        justifyItems: 'center',
      }}
    >
      <Session />
      <NaverMap />
    </div>
  )
}
