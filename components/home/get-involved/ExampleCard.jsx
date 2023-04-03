/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react'

import useParallax from '../../../hooks/useParallax'

const ExampleCard = ({ image, imageDescription, title, subtitle }) => {
  const ref = useRef(null)

  const { translateY: backgroundTranslateY } = useParallax(ref, 0.02)

  return (
    <div
      className="get-involved__example"
      ref={ref}
      style={{ transform: `translateY(-${backgroundTranslateY}px)` }}
    >
      <img className="get-involved__image" src={image} alt={imageDescription} />
      <div>
        <h2 className="get-involved__example-subtitle">{subtitle}</h2>
        <p className="get-involved__text">{title}</p>
      </div>
    </div>
  )
}

export default ExampleCard
