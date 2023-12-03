import React from 'react'
import { suitBold } from '@/_styles/fonts/fonts'
import MOCK_LINKS from '@/taeheon/_mocks/MockLinks'
import classes from './conduct.module.css'
import ConductLink from './ConductLink'

export default function Conduct() {
  return (
    <div className={classes.container}>
      <div>
        <div className={`${classes.wrapper} ${classes.first}`}>
          <p
            className={`${classes.text} ${classes.highligt} ${suitBold.className}`}
          >
            새싹콘의 CoC
          </p>
          <p className={classes.text}>와&nbsp;</p>
          <p
            className={`${classes.text} ${classes.highligt} ${suitBold.className}`}
          >
            FAQ
          </p>
          <p className={classes.text}>는</p>
        </div>
        <p className={classes.text}>다양한 생각들을 참고해 작성되었어요.</p>
      </div>

      <div className={classes.link_wrapper}>
        {MOCK_LINKS.map((content) => (
          <ConductLink
            key={content.id}
            title={content.title}
            url={content.url}
          />
        ))}
      </div>
    </div>
  )
}
