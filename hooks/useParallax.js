import { useEffect, useState } from 'react'

const useParallax = (ref, factor = 0.1) => {
  const [translateY, setTranslateY] = useState(0)

  useEffect(() => {
    const background = ref.current

    if (!background) {
      return
    }

    const handleScroll = () => {
      const callback = () => {
        const top = background.getBoundingClientRect().top
        const bottom = background.getBoundingClientRect().bottom

        if (top < window.innerHeight && bottom > 0) {
          const distance = window.scrollY * factor

          setTranslateY(distance)
        }
      }

      requestAnimationFrame(callback)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [factor, ref])

  return { translateY }
}

export default useParallax
