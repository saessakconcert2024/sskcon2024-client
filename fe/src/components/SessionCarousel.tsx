'use client'

import { SESSION_COMMENTS } from '@/constants/Session'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { suitExtraBold } from '@/_styles/fonts/fonts'
import SessionSlide from './SessionSlide'
import style from '../style/Carousel.module.css'
import '../style/ReactResponsiveCarousel.css'

export default function SessionCarousel() {
  return (
    <div className={style.carouselContainer}>
      <Carousel
        emulateTouch
        swipeable
        dynamicHeight
        showStatus={false}
        showArrows={false}
      >
        {SESSION_COMMENTS.map(({ title, comments }, idx) => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '20px',
              alignItems: 'center',
            }}
          >
            <h1 className={suitExtraBold.className}>Session{idx + 1}</h1>
            <SessionSlide title={title} comments={comments} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}
