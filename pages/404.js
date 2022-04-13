import Head from 'next/head'

import { getLiteral } from '../common/i18n'
import NotFound from '../components/not-found/NotFound'

export default function NotFoundPage() {
  return (
    <div>
      <Head>
        <title>{getLiteral('meta:title')}</title>
        <meta name="description" content={getLiteral('meta:description')} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:title" content={getLiteral('meta:title')} />
        <meta
          property="og:description"
          content={getLiteral('meta:description')}
        />
        <meta
          property="og:image"
          content="https://maintainermonth.github.com/images/og/generic.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={getLiteral('meta:title')} />
        <meta
          name="twitter:description"
          content={getLiteral('meta:description')}
        />
        <meta
          name="twitter:image"
          content="https://maintainermonth.github.com/images/og/generic.png"
        />
      </Head>

      <NotFound />
    </div>
  )
}
