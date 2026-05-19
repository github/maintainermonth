import { useEffect } from 'react'
import Head from 'next/head'
import path from 'path'

import { getLiteral } from '../common/i18n'
import { getDataFromMD } from '../common/api'
import Postcard from '../components/postcard/Postcard'

import { useBackground } from '../contexts/BackgroundContext'

export default function LoveLettersPage({ postcards }) {
  const { setAnimationStep } = useBackground()

  useEffect(() => {
    setAnimationStep(6)
  }, [setAnimationStep])

  return (
    <div>
      <Head>
        <title>{`Love Letters - ${getLiteral('meta:title')}`}</title>
        <meta name="description" content="Postcards of appreciation for open source maintainers." />

        <meta property="og:title" content="Love Letters" />
        <meta property="og:description" content="Postcards of appreciation for open source maintainers." />
        <meta property="og:image" content="https://maintainermonth.github.com/images/og/generic.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Love Letters" />
        <meta name="twitter:description" content="Postcards of appreciation for open source maintainers." />
        <meta name="twitter:image" content="https://maintainermonth.github.com/images/og/generic.png" />
      </Head>

      <Postcard postcards={postcards} />
    </div>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'love-letters', 'postcards.md')
  const data = getDataFromMD(filePath)

  return {
    props: {
      postcards: data.postcards || [],
    },
  }
}
