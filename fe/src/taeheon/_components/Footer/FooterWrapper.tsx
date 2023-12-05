import { PropsWithChildren } from 'react'
import classes from './footerWrapper.module.css'

export default function FooterWrapper(props: PropsWithChildren<object>) {
  const { children } = props
  return <div className={classes.wrapper}>{children}</div>
}
