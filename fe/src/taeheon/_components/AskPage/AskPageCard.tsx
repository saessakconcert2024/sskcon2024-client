import { PropsWithChildren } from 'react'
import classes from './askPageCard.module.css'

export default function AskPageCard(props: PropsWithChildren<object>) {
  const { children } = props
  return <div className={classes.page_card}>{children}</div>
}
