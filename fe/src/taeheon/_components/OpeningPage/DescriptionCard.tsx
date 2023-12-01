import { PropsWithChildren } from 'react'
import classes from './descriptionCard.module.css'

export default function DescriptionCard(props: PropsWithChildren<object>) {
  const { children } = props

  return <div className={classes.description_container}>{children}</div>
}
