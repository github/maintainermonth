/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect, useState } from 'react'

import ButtonLink from '../../button-link/ButtonLink'

import * as ROUTES from '../../../common/routes'
import { getLiteral } from '../../../common/i18n'

const Hero = ({ date, title, buttonText }) => {
  const imageRef = useRef(null)
  const backgroundRef = useRef(null)

  const [imageTranslateY, setImageTraslateY] = useState(0)
  const [backgroundTranslateY, setBackgroundTraslateY] = useState(0)

  useEffect(() => {
    const background = backgroundRef.current
    const image = imageRef.current

    if (!background || !image) {
      return
    }

    const handleScroll = () => {
      const callback = () => {
        const backgroundTop = background.getBoundingClientRect().top
        const backgroundBottom = background.getBoundingClientRect().bottom

        if (backgroundTop < window.innerHeight && backgroundBottom > 0) {
          const distance = window.scrollY * 0.1

          const scaleDistance = (
            ((backgroundBottom * 100) / window.innerHeight) *
            0.025
          ).toFixed(2)

          setBackgroundTraslateY(distance)
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
  }, [backgroundRef])

  return (
    <section className="hero">
      <div className="hero__background">
        <div
          className="hero__image-wrapper"
          ref={backgroundRef}
          style={{ transform: `translateY(-${backgroundTranslateY}px)` }}
        >
          <img
            className="hero__image"
            ref={imageRef}
            style={{
              transform: `scale(1.025) translateY(${imageTranslateY}%)`,
            }}
            src="/images/opener.jpg"
            alt={getLiteral('hero:image-description')}
          />
        </div>
      </div>

      <div className="hero__content">
        <p className="hero__chip">{date}</p>
        <h1 className="hero__title">{title}</h1>

        <ButtonLink href={ROUTES.SCHEDULE.path}>{buttonText}</ButtonLink>
      </div>
    </section>
  )
}

export default Hero
