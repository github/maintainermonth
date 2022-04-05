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
        <link rel="icon" href="/favicon.svg" />
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
