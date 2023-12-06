'use client'

import { useEffect, useState } from 'react'
import { SESSION_COMMENTS } from '@/constants/Session'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { suitExtraBold } from '@/_styles/fonts/fonts'
import SessionSlide from './SessionSlide'
import style from '../style/Carousel.module.css'
import '../style/ReactResponsiveCarousel.css'

export default function SessionCarousel() {
  const [isCenterMode, setIsCenterMode] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsCenterMode(window.innerWidth > 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={style.carouselContainer}>
      <Carousel
        infiniteLoop
        centerMode={isCenterMode}
        emulateTouch
        swipeable
        showStatus={false}
        showArrows={false}
      >
        {SESSION_COMMENTS.map(({ title, comments }, idx) => (
          <div className={style.carouselItem}>
            <h2
              className={`${suitExtraBold.className} ${style.carouselItemTitle}`}
            >
              Session{idx + 1}
            </h2>
            <SessionSlide title={title} comments={comments} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}
