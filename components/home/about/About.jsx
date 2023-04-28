/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react'

import md from 'markdown-it'

import { getLiteral } from '../../../common/i18n'
import useParallax from '../../../hooks/useParallax'
import ExampleCard from '../get-involved/ExampleCard'


const About = ({ title, content, theme1, theme2 }) => {
  const image1 = useRef(null)
  const image2 = useRef(null)

  const { translateY: image1TranslateY } = useParallax(image1, 0.01)
  const { translateY: image2TranslateY } = useParallax(image2, 0.05)

  return (
    <section className="about">
      <div className="about__content">
        <div className="about__column">
          <h2 className="about__title">{title}</h2>

          <div className="about__images">
            <img
              ref={image1}
              style={{ transform: `translateY(-${image1TranslateY}px)` }}
              className="about__image"
              src={'/images/about1.png'}
              alt={getLiteral('hero:image-description')}
            />
            <img
              ref={image2}
              style={{ transform: `translateY(-${image2TranslateY}px)` }}
              className="about__image--layer"
              src={'/images/about2.png'}
              alt={getLiteral('hero:image-description')}
            />
          </div>
        </div>
        <div className="about__text">
        <div
          dangerouslySetInnerHTML={{ __html: md().render(content) }}
        />
        <div className="about__themes">
          <div>
            <h4 className="get-involved__example-subtitle">Theme For Maintainers</h4>
            <p className="get-involved__text">{theme1}</p>
          </div>
          <div>
            <h4 className="get-involved__example-subtitle">Theme For Companies</h4>
            <p className="get-involved__text">{theme2}</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default About
