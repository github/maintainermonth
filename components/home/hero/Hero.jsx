import Link from 'next/link'

import { getRelativeURL } from '../../../common/routes'

const Hero = ({ date, title, buttonText }) => {
  return (
    <section className="hero">
      <p>{date}</p>
      <h1>{title}</h1>

      <Link href={getRelativeURL('/schedule')}>{buttonText}</Link>
    </section>
  )
}

export default Hero
