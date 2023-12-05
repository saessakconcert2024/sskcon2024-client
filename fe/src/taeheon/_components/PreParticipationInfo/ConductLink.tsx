'use client'

import classes from './conduct.module.css'

type LinkProps = {
  title: string
  url: string
}

export default function ConductLink({ title, url }: LinkProps) {
  return (
    <div className={classes.link_container}>
      <a href={url} target="_blank" className={classes.text} rel="noreferrer">
        {title}
      </a>
    </div>
  )
}
