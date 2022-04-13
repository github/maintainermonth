/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react'

import useParallax from '../../../hooks/useParallax'

const ExampleCard = ({ image, imageDescription, title }) => {
  const ref = useRef(null)

  const { translateY: backgroundTranslateY } = useParallax(ref, 0.02)

  return (
    <div
      className="get-involved__example"
      ref={ref}
      style={{ transform: `translateY(-${backgroundTranslateY}px)` }}
    >
      <img className="get-involved__image" src={image} alt={imageDescription} />
      <p>{title}</p>
    </div>
  )
}

export default ExampleCard
