import { PropsWithChildren } from 'react'
import classes from './pageCard.module.css'

export default function PageCard(props: PropsWithChildren<object>) {
  const { children } = props
  return <div className={classes.page_card}>{children}</div>
}
