/* eslint-disable @next/next/no-img-element */
import md from 'markdown-it'

import { getLiteral } from '../../../common/i18n'

const About = ({ title, content }) => {
  return (
    <section className="about">
      <div className="about__content">
        <div className="about__column">
          <h2 className="about__title">{title}</h2>
          <img
            className="about__image"
            src={'/images/maintainer-detail.png'}
            alt={getLiteral('hero:image-description')}
          />
        </div>

        <div
          className="about__text"
          dangerouslySetInnerHTML={{ __html: md().render(content) }}
        />
      </div>
    </section>
  )
}

export default About
