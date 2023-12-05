'use client'

import DESTINATION from '@/constants/Destination'
import { useEffect, useRef } from 'react'
import style from '../style/Navermap.module.css'

function createMarker(location: string, map: any) {
  return new window.naver.maps.Marker({
    position: location,
    map,
  })
}

export default function NaverMap() {
  const mapDiv = useRef(null)

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
  )
}
