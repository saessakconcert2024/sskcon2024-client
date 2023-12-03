import { suitBold } from '@/_styles/fonts/fonts'
import classes from './highlightText.module.css'

type HighlightTextProps = {
  text: string
}

export default function HighlightText({ text }: HighlightTextProps) {
  return (
    <div className={`${classes.container} ${suitBold.className}`}>
      <p>{text}</p>
    </div>
  )
}
