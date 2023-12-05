'use client'

import { PropsWithChildren } from 'react'
import useScrollAnimation from '@/taeheon/_hooks/useScrollAnimation'
import classes from './askPageCard.module.css'

export default function AskPageCard(props: PropsWithChildren<object>) {
  const { targetRef, animation } = useScrollAnimation()

  const { children } = props
  return (
    <div
      ref={targetRef}
      className={`${classes.page_card} ${animation ? classes.animation : ''}`}
    >
      {children}
    </div>
  )
}
