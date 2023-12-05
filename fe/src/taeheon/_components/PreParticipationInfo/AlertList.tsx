import MOCK_ALERT_LIST from '@/taeheon/_mocks/MockAlertList'
import { suitMedium } from '@/_styles/fonts/fonts'
import classes from './alertList.module.css'

export default function AlertList() {
  return (
    <div className={classes.container}>
      {MOCK_ALERT_LIST.map((list) => (
        <div key={list.id} className={classes.content_wrapper}>
          <p className={`${classes.content} ${suitMedium.className}`}>
            {list.content}
          </p>
        </div>
      ))}
    </div>
  )
}
