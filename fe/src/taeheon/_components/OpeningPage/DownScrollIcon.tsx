'use client'

import Image from 'next/image'
import { DownArrowIconSrc } from '../../../../public/Images'
import classes from './downScrollIcon.module.css'

export default function DownScrollIcon() {
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <div className={classes.container}>
      <Image
        className={classes.image}
        onClick={handleClick}
        src={DownArrowIconSrc}
        width={30}
        height={30}
        alt="아이콘"
      />
    </div>
  )
}
