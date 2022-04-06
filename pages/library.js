import Head from 'next/head'
import Link from 'next/link'

import { getLiteral } from '../common/i18n'
import resourcesJSON from '../content/library/resources.json'

const { resources } = resourcesJSON

export default function Library() {
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
        <meta property="og:image" content="/images/og/generic.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={getLiteral('library:title')} />
        <meta
          name="twitter:description"
          content={getLiteral('library:description')}
        />
        <meta name="twitter:image" content="/images/og/generic.png" />
      </Head>

      <main>
        <h1>{getLiteral('library:title')}</h1>

        {resources.map((resource) => (
          <div key={resource.title}>
            <Link href={resource.link}>{resource.title}</Link>
          </div>
        ))}
      </main>
    </div>
  )
}
