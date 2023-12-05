import Image from 'next/image'
import { UpArrowIconSrc } from '../../../../public/Images'
import classes from './upIcon.module.css'

export default function UpArrowIcon() {
  return (
    <div className={classes.up_icon_container}>
      <Image src={UpArrowIconSrc} width={15} height={15} alt="아이콘" />
    </div>
  )
}
