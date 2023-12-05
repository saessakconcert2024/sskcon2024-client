import PageCard from './PageCard'
import BannerText from './BannerText'
import BannerInfo from './BannerInfo'
import AlertList from './AlertList'
import Conduct from './Conduct'

export default function PreParticipationInfoPageComponent() {
  return (
    <PageCard>
      <BannerText />
      <BannerInfo />
      <AlertList />
      <Conduct />
    </PageCard>
  )
}
