'use client'

import DownIconSrc from 'public/images/DownArrowIcon.svg'
import Image from 'next/image'
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
        src={DownIconSrc}
        width={30}
        height={30}
        alt="아이콘"
      />
    </div>
  )
}
