import { useEffect } from 'react'
import Head from 'next/head'

import { getLiteral } from '../common/i18n'
import LibraryLinks from '../components/library-links/LibraryLinks'
import { getDataFromMD } from '../common/api'

import { useBackground } from '../contexts/BackgroundContext'

export default function News({ data }) {
  const { setAnimationStep } = useBackground()

  useEffect(() => {
    setAnimationStep(6)
  }, [setAnimationStep])

  return (
    <div>
      <Head>
        <title>{getLiteral('news:title')}</title>
        <meta name="description" content={getLiteral('news:description')} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:title" content={getLiteral('news:title')} />
        <meta
          property="og:description"
          content={getLiteral('news:description')}
        />
        <meta
          property="og:image"
          content="https://maintainermonth.github.com/images/og/generic.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={getLiteral('news:title')} />
        <meta
          name="twitter:description"
          content={getLiteral('news:description')}
        />
        <meta
          name="twitter:image"
          content="https://maintainermonth.github.com/images/og/generic.png"
        />
      </Head>

      <div>
        <LibraryLinks links={data} />
      </div>
    </div>
  )
}

export async function getStaticProps() {
    const data = getDataFromMD('content/news/index.md').news
  
    return {
      props: {
        data
      },
    }
  }