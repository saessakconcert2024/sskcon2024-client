'use client'

import { PropsWithChildren } from 'react'
import useScrollAnimation from '@/taeheon/_hooks/useScrollAnimation'
import classes from './bannerImage.module.css'

export default function BannerImage(props: PropsWithChildren<object>) {
  const { targetRef, animation } = useScrollAnimation()
  const { children } = props
  return (
    <div
      ref={targetRef}
      className={`${classes.banner_image_container} ${
        animation ? classes.animation : ''
      }`}
    >
      {children}
    </div>
  )
}
