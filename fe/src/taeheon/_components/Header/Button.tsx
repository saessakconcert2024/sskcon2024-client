'use client'

import React from 'react'
import { suitRegular } from '@/_styles/fonts/fonts'
import classes from './button.module.css'

export default function Button() {
  return (
    <div className={classes.container}>
      <button type="button" className={`${classes.button} ${suitRegular}`}>
        신청 마감
      </button>
    </div>
  )
}
