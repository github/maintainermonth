/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react'

import ButtonLink from '../../button-link/ButtonLink'

import * as ROUTES from '../../../common/routes'
import { getLiteral } from '../../../common/i18n'
import useParallax from '../../../hooks/useParallax'
import useInnerParallax from '../../../hooks/useInnerParallax'

const Hero = ({ date, title, buttonText }) => {
  const imageRef = useRef(null)
  const backgroundRef = useRef(null)

  const { translateY: backgroundTranslateY } = useParallax(backgroundRef)
  const { translateY: imageTranslateY } = useInnerParallax(
    backgroundRef,
    imageRef,
  )

  return (
    <section className="hero">
      <div className="hero__grid">
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
      </div>
    </section>
  )
}

export default Hero
