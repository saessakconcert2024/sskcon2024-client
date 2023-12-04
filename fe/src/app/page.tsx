import OpeningPageComponent from '@/taeheon/_components/OpeningPage/OpeningPageComponent'
import AskPageComponent from '@/taeheon/_components/AskPage/AskPageComponent'
import PreParticipationInfoPageComponent from '@/taeheon/_components/PreParticipationInfo/PreParticipationInfoPageComponent'
import Footer from '@/taeheon/_components/Footer/Footer'

export default function Home() {
  return (
    <>
      <OpeningPageComponent />
      <AskPageComponent />
      <PreParticipationInfoPageComponent />
      <Footer />
    </>
  )
}
