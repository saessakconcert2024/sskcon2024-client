'use client'

import DESTINATION from '@/constants/Destination'
import { useEffect, useRef } from 'react'
import { suitBold } from '@/_styles/fonts/fonts'
import useScrollAnimation from '@/taeheon/_hooks/useScrollAnimation'
import style from '../style/Navermap.module.css'

function createMarker(location: string, map: any) {
  return new window.naver.maps.Marker({
    position: location,
    map,
  })
}

export default function NaverMap() {
  const mapDiv = useRef(null)
  const { targetRef, animation } = useScrollAnimation()

  useEffect(() => {
    if (!mapDiv.current || !window.naver) {
      return
    }

    const location = new window.naver.maps.LatLng(
      DESTINATION.latitude,
      DESTINATION.longtitude,
    )
    const mapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
    }
    const map = new window.naver.maps.Map(mapDiv.current, mapOptions)

    createMarker(location, map)
  }, [])

  return (
    <div
      ref={targetRef}
      className={`${style.mapWrapper} ${animation ? style.animation : ''}`}
    >
      <div className={style.mapHeader}>
        <h2 className={`${suitBold.className} ${style.mapHeaderTitle}`}>
          2024년 1월 3일 수요일
        </h2>
        <h3 className={style.mapHeaderSubtitle}>우리 여기서 만나요!</h3>
      </div>
      <div className={style.mapContainer}>
        <div ref={mapDiv} className={style.mapSource} />
        <div className={style.mapDescription}>
          <span>{DESTINATION.name}</span>
          <div>
            <p>{DESTINATION.detail}</p>
            <p>{DESTINATION.room}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
