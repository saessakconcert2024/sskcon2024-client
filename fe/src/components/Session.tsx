import SessionCarousel from './SessionCarousel'
import style from '../style/Session.module.css'

export default function Session() {
  return (
    <div className={style.sessionContainer}>
      <SessionCarousel />
      <div className={style.applicationButton}>연사자 신청하기</div>
    </div>
  )
}
