import React from 'react'
import classes from './conduct.module.css'
import LinkText from './LinkText'

export default function Conduct() {
  return (
    <div className={classes.container}>
      <div className={`${classes.wrapper} ${classes.first}`}>
        <p className={classes.text}>새싹콘의 CoC는 앞서 공유해주신</p>
        <p className={classes.text}>생각들을 참고해 작성되었어요.</p>
      </div>

      <div className={classes.wrapper}>
        <p className={classes.text}>파이콘 한국 행동강령</p>
        <LinkText />
      </div>
    </div>
  )
}
