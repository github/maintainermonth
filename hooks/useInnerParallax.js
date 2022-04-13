import { useEffect, useState } from 'react'

const useInnerParallax = (elementRef, wrapperRef, factor = 0.025) => {
  const [translateY, setImageTraslateY] = useState(0)

  useEffect(() => {
    const background = elementRef.current
    const image = wrapperRef.current

    if (!background || !image) {
      return
    }

    const handleScroll = () => {
      const callback = () => {
        const top = background.getBoundingClientRect().top
        const bottom = background.getBoundingClientRect().bottom

        if (top < window.innerHeight && bottom > 0) {
          const scaleDistance = (
            ((bottom * 100) / window.innerHeight) *
            factor
          ).toFixed(2)

          setImageTraslateY(scaleDistance)
        }
      }

      requestAnimationFrame(callback)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [elementRef, factor, wrapperRef])

  return { translateY }
}

export default useInnerParallax
