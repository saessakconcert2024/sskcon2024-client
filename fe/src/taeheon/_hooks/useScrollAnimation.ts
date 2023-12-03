import { useRef, useEffect, useState } from 'react'

const useScrollAnimation = () => {
  const targetRef = useRef(null)
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    const currentSection = targetRef.current

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimation(true)
          } else {
            setAnimation(false)
          }
        })
      },
      {
        rootMargin: '0px',
        threshold: 0.3,
      },
    )

    if (currentSection) {
      observer.observe(currentSection)
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection)
      }
    }
  }, [])

  return { targetRef, animation }
}

export default useScrollAnimation
