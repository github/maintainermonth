import { useEffect } from 'react'
import Head from 'next/head'

import { getLiteral } from '../common/i18n'
import LibraryLinks from '../components/library-links/LibraryLinks'
import resourcesJSON from '../content/library/resources.json'

import { useBackground } from '../contexts/BackgroundContext'

const { resources } = resourcesJSON

export default function Library() {
  const { setAnimationStep } = useBackground()

  useEffect(() => {
    setAnimationStep(6)
  }, [setAnimationStep])

  return (
    <div>
      <Head>
        <title>{getLiteral('library:title')}</title>
        <meta name="description" content={getLiteral('library:description')} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:title" content={getLiteral('library:title')} />
        <meta
          property="og:description"
          content={getLiteral('library:description')}
        />
        <meta
          property="og:image"
          content="https://maintainermonth.github.com/images/og/generic.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={getLiteral('library:title')} />
        <meta
          name="twitter:description"
          content={getLiteral('library:description')}
        />
        <meta
          name="twitter:image"
          content="https://maintainermonth.github.com/images/og/generic.png"
        />
      </Head>

      <div>
        <LibraryLinks links={resources} />
      </div>
    </div>
  )
}
