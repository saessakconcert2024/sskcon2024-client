import { suitMedium } from '@/_styles/fonts/fonts'
import classes from './bannerText.module.css'

export default function BannerText() {
  return (
    <div className={classes.banner_text_container}>
      <p className={`${classes.banner_text} ${suitMedium.className}`}>
        참여 전 필수 정독
      </p>
    </div>
  )
}
