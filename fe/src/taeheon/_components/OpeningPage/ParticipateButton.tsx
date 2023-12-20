'use client'

import { suitRegular } from '@/_styles/fonts/fonts'
import classes from './participateButton.module.css'

export default function ParticipateButton() {
  return (
    <div className={classes.particiapte_button_container}>
      <button
        type="button"
        className={`${classes.participate_button} ${suitRegular}`}
      >
        신청 마감
      </button>
    </div>
  )
}
