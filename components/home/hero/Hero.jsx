import ButtonLink from '../../button-link/ButtonLink'

import { getRelativeURL } from '../../../common/routes'

const Hero = ({ date, title, buttonText }) => {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__chip">{date}</p>
        <h1 className="hero__title">{title}</h1>

        <ButtonLink href={getRelativeURL('/schedule')}>{buttonText}</ButtonLink>
      </div>
    </section>
  )
}

export default Hero
