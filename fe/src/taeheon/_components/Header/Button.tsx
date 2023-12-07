'use client'

import React from 'react'
import { suitRegular } from '@/_styles/fonts/fonts'
import classes from './button.module.css'

export default function Button() {
  const openRegisterForm = () => {
    const url =
      'https://docs.google.com/forms/d/e/1FAIpQLSevJKLtk2W8pTlU9mOf7IntPiftQ0kTP0YZOMa1o5w6XIDuYg/viewform?usp=sharing' // 구글폼 주소
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
