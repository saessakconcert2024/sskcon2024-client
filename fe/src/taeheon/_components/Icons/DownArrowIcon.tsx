import Image from 'next/image'
import DownArrowIconSrc from 'public/images/DownArrowIcon.svg'
import classes from './downIcon.module.css'

export default function DownArrowIcon() {
  return (
    <div className={classes.down_icon_container}>
      <Image src={DownArrowIconSrc} width={20} height={20} alt="아이콘" />
    </div>
  )
}
