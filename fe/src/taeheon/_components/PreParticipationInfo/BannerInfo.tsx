import { suitBold } from '@/_styles/fonts/fonts'
import classes from './bannerInfo.module.css'

export default function BannerInfo() {
  return (
    <div className={classes.container}>
      <div className={`${classes.text_container}`}>
        <p className={classes.text}>새싹콘은 주니어 개발자라면 누구나</p>
        <p className={classes.text}>
          자유롭게 참여할 수 있는 토크콘서트이에요.
        </p>
      </div>
      <div className={classes.text_container}>
        <p className={classes.text}>즐겁고 안전한 행사 진행을 위해,</p>
        <p className={classes.text}>
          새싹콘에 참여하는 분이라면{' '}
          <strong className={`${suitBold.className}`}>
            이것만은 꼭 지켜주세요!
          </strong>
        </p>
      </div>
    </div>
  )
}
