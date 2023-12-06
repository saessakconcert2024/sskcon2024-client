'use client'

import SessionCarousel from './SessionCarousel'
import style from '../style/Session.module.css'
import useScrollAnimation from '@/taeheon/_hooks/useScrollAnimation'

export default function Session() {
  const { targetRef, animation } = useScrollAnimation()

  return (
    <div
      ref={targetRef}
      className={`${style.sessionContainer} ${
        animation ? style.animation : ''
      }`}
    >
      <SessionCarousel />
      <div className={style.applicationButton}>연사자 신청하기</div>
    </div>
  )
}
