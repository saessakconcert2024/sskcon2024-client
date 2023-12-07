import OpeningPageComponent from '@/taeheon/_components/OpeningPage/OpeningPageComponent'
import AskPageComponent from '@/taeheon/_components/AskPage/AskPageComponent'
import PreParticipationInfoPageComponent from '@/taeheon/_components/PreParticipationInfo/PreParticipationInfoPageComponent'
import Footer from '@/taeheon/_components/Footer/Footer'
import NaverMap from '@/components/NaverMap'
import Session from '@/components/Session'
import style from '@/style/Main.module.css'

declare global {
  interface Window {
    naver: any
  }
}

export default function Home() {
  return (
    <div className={style.mainWrapper}>
      <OpeningPageComponent />
      <div className={style.mainContainer}>
        <Session />
        <NaverMap />
        <AskPageComponent />
        <PreParticipationInfoPageComponent />
      </div>
      <Footer />
    </div>
  )
}
