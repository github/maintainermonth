/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react'
import { getLiteral } from '../../../common/i18n'
import * as ROUTES from '../../../common/routes'
import useInnerParallax from '../../../hooks/useInnerParallax'

import ButtonLink from '../../button-link/ButtonLink'

const Connection = ({ title, buttonText }) => {
  const imageRef = useRef(null)
  const backgroundRef = useRef(null)

  const { translateY: imageTranslateY } = useInnerParallax(
    backgroundRef,
    imageRef,
    0.05,
  )

  return (
    <div className="connection">
      <div className="connection__background" ref={backgroundRef}>
        <img
          className="connection__image"
          ref={imageRef}
          style={{
            transform: `scale(1.1) translateY(${imageTranslateY}%)`,
          }}
          src="/images/footer.jpg"
          alt={getLiteral('connection:image-description')}
        />
      </div>
      <div className="connection__content">
        <h2 className="connection__title">{title}</h2>

        <div className="connection__button">
          <ButtonLink href={ROUTES.SCHEDULE.path}>{buttonText}</ButtonLink>
        </div>
      </div>
    </div>
  )
}

export default Connection
