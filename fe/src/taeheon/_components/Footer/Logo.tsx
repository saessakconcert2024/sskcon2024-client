import { suitRegular } from '@/_styles/fonts/fonts'
import classes from './footer.module.css'

export default function Logo() {
  return (
    <div className={classes.logo_wrapper}>
      <p className={`${classes.logo_text} ${suitRegular}`}>SaessakCon 2024</p>
    </div>
  )
}
