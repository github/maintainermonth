import { useEffect } from 'react'
import Head from 'next/head'

import { getLiteral } from '../common/i18n'
import Ships from '../components/ships/Ships'
import shipsJSON from '../content/ships/ships.json'

import { useBackground } from '../contexts/BackgroundContext'

const { ships } = shipsJSON

export default function ShipsPage() {
  const { setAnimationStep } = useBackground()

  useEffect(() => {
    setAnimationStep(6)
  }, [setAnimationStep])

  return (
    <div>
      <Head>
        <title>
          {getLiteral('ships:title')} - {getLiteral('meta:title')}
        </title>
        <meta name="description" content={getLiteral('ships:description')} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:title" content={getLiteral('ships:title')} />
        <meta
          property="og:description"
          content={getLiteral('ships:description')}
        />
        <meta
          property="og:image"
          content="https://maintainermonth.github.com/images/og/generic.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={getLiteral('ships:title')} />
        <meta
          name="twitter:description"
          content={getLiteral('ships:description')}
        />
        <meta
          name="twitter:image"
          content="https://maintainermonth.github.com/images/og/generic.png"
        />
      </Head>

      <Ships ships={ships} />
    </div>
  )
}
