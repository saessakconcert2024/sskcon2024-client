import Organizer from './Organizer'
import Terms from './Terms'
import Logo from './Logo'
import FooterCard from './FooterCard'
import PlantImage from './PlantImage'
import FooterWrapper from './FooterWrapper'

export default function Footer() {
  return (
    <FooterCard>
      <FooterWrapper>
        <Logo />
        <Terms />
        <Organizer />
      </FooterWrapper>
      <PlantImage />
    </FooterCard>
  )
}
