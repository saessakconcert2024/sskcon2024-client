import BannerImage from './BannerImage'
import Description from './Description'
import ParticipateButton from './ParticipateButton'
import DescriptionCard from './DescriptionCard'

export default function OpeningPageComponent() {
  return (
    <BannerImage>
      <DescriptionCard>
        <Description />
        <ParticipateButton />
      </DescriptionCard>
    </BannerImage>
  )
}
