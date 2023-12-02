'use client'

import classes from './conduct.module.css'

export default function LinkText() {
  const openLinkHandler = () => {
    const url = 'https://infcon.day/notice/'
    window.open(url, '_blank')
  }

  return (
    <button
      type="button"
      className={`${classes.link}`}
      onClick={openLinkHandler}
    >
      https://infcon.day/notice/
    </button>
  )
}
