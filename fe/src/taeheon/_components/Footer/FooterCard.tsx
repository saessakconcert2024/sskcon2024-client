import { PropsWithChildren } from 'react'
import classes from './footer.module.css'

export default function FooterCard(props: PropsWithChildren<object>) {
  const { children } = props

  return <div className={classes.container}>{children}</div>
}
