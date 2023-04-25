/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react'
import { getLiteral } from '../../../common/i18n'
import * as ROUTES from '../../../common/routes'
import useInnerParallax from '../../../hooks/useInnerParallax'

import ButtonLink from '../../button-link/ButtonLink'

const Council = () => {

  return (
    <section className="about">
      <div className="about__content">
        <div className="about__column">
          <h2 className="about__title">Maintainer Month 2023 Advisory Council</h2>
        </div>

        <div className="about__text">
        <ul>
          <li>Abigail Cabunoc Mayes, GitHub</li>
          <li>Ana Jimenez, TODO Group</li>
          <li>Duane O’Brien</li>
          <li>Josh Simmons</li>
          <li>Julia Ferraioli, Open Source Stories</li>
          <li>Kara Sowles, GitHub</li>
          <li>Melissa Mendonça, Quansight</li>
          <li>Richard Littauer, Open Source Collective</li>
          <li>Ruth Ikegah, CHAOSS</li>
        </ul>
        </div>
      </div>
    </section>
  )
}

export default Council