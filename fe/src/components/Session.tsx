'use client'

import useScrollAnimation from '@/taeheon/_hooks/useScrollAnimation'
import SessionCarousel from './SessionCarousel'
import style from '../style/Session.module.css'

export default function Session() {
  const { targetRef, animation } = useScrollAnimation()

  const openRegisterForm = () => {
    const url =
      'https://docs.google.com/forms/d/e/1FAIpQLSevJKLtk2W8pTlU9mOf7IntPiftQ0kTP0YZOMa1o5w6XIDuYg/viewform?usp=sharing' // 구글폼 주소
    window.open(url, '_blank')
  }

  return (
    <div
      ref={targetRef}
      className={`${style.sessionContainer} ${
        animation ? style.animation : ''
      }`}
    >
      <SessionCarousel />
      <button
        className={style.applicationButton}
        onClick={openRegisterForm}
        type="button"
      >
        연사자 신청하기
      </button>
    </div>
  )
}
