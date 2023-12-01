import React from 'react'
import { suitMedium } from '@/_styles/fonts/fonts'
import classes from './categoryBanner.module.css'

type CategoryBannerProps = {
  category: string
}

export default function CategoryBanner({ category }: CategoryBannerProps) {
  return (
    <div className={classes.question_category}>
      <p className={`${suitMedium.className} ${classes.category_text}`}>
        {category}
      </p>
    </div>
  )
}
