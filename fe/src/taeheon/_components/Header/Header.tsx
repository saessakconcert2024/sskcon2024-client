import Image from 'next/image'
import LogoImage from 'public/images/logo.svg'
import Link from 'next/link'
import classes from './header.module.css'
import Button from './Button'

export default function Header() {
  return (
    <Link href="/" className={classes.header_container}>
      <div className={classes.logo_image_container}>
        <Image
          src={LogoImage}
          className={classes.image}
          width={170}
          height={30}
          alt="로고이미지"
        />
      </div>
      <Button />
    </Link>
  )
}
