import BannerImage from './BannerImage'
import Description from './Description'
import ParticipateButton from './ParticipateButton'
import DescriptionCard from './DescriptionCard'
import DownScrollIcon from './DownScrollIcon'

export default function OpeningPageComponent() {
  return (
    <BannerImage>
      <DescriptionCard>
        <Description />
        <ParticipateButton />
        <DownScrollIcon />
      </DescriptionCard>
    </BannerImage>
  )
}
