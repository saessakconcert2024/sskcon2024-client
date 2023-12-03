'use client'

import React from 'react'
import { suitRegular } from '@/_styles/fonts/fonts'
import classes from './button.module.css'

export default function Button() {
  const openRegisterForm = () => {
    const url = 'https://google.com' // 구글폼 주소
    window.open(url, '_blank')
  }

  return (
    <div className={classes.container}>
      <button
        onClick={openRegisterForm}
        type="button"
        className={`${classes.button} ${suitRegular}`}
      >
        참가 신청
      </button>
    </div>
  )
}
