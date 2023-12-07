'use client'

import { suitRegular } from '@/_styles/fonts/fonts'
import classes from './participateButton.module.css'

export default function ParticipateButton() {
  const openRegisterForm = () => {
    const url =
      'https://docs.google.com/forms/d/e/1FAIpQLSevJKLtk2W8pTlU9mOf7IntPiftQ0kTP0YZOMa1o5w6XIDuYg/viewform?usp=sharing' // 구글폼 주소
    window.open(url, '_blank')
  }

  return (
    <div className={classes.particiapte_button_container}>
      <button
        onClick={openRegisterForm}
        type="button"
        className={`${classes.participate_button} ${suitRegular}`}
      >
        참여하기 (~12월20일마감)
      </button>
    </div>
  )
}
