import Image from 'next/image'
import Link from 'next/link'
import { LogoIconImageSrc } from '../../../../public/Images'
import classes from './header.module.css'
import Button from './Button'

export default function Header() {
  return (
    <Link href="/" className={classes.header_container}>
      <div className={classes.logo_image_container}>
        <Image
          src={LogoIconImageSrc}
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
