import Image from 'next/image'
import { PlantImageSrc } from '../../../../public/Images'
import classes from './plantImage.module.css'

export default function PlantImage() {
  return (
    <div className={classes.image_container}>
      <Image
        className={classes.image}
        src={PlantImageSrc}
        width={100}
        height={40}
        alt="이미지"
      />
    </div>
  )
}
