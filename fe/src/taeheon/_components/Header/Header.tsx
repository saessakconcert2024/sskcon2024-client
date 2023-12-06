import Link from 'next/link'
import { suitRegular } from '@/_styles/fonts/fonts'
import classes from './header.module.css'
import Button from './Button'

export default function Header() {
  return (
    <Link href="/" className={classes.header_container}>
      <div className={classes.logo_image_container}>
        <p className={`${suitRegular.className} ${classes.header_logo}`}>
          SaessakCon 2024
        </p>
      </div>
      <Button />
    </Link>
  )
}
