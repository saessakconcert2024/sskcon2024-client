'use client'

import { suitRegular } from '@/_styles/fonts/fonts'
import classes from './participateButton.module.css'

export default function ParticipateButton() {
  const openRegisterForm = () => {
    const url = 'https://google.com' // 구글폼 주소
    window.open(url, '_blank')
  }

  return (
    <div className={classes.particiapte_button_container}>
      <button
        onClick={openRegisterForm}
        type="button"
        className={`${classes.participate_button} ${suitRegular}`}
      >
        참여하기 (~12월29일마감)
      </button>
    </div>
  )
}
