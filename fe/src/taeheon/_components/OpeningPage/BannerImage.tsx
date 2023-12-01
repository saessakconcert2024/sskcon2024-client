import { PropsWithChildren } from 'react'
import classes from './bannerImage.module.css'

export default function BannerImage(props: PropsWithChildren<object>) {
  const { children } = props
  return <div className={classes.banner_image_container}>{children}</div>
}
