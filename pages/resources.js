import Head from 'next/head'
import Link from 'next/link'

import { getLiteral } from '../common/i18n'
import resourcesJSON from '../content/resources/resources.json'

const { resources } = resourcesJSON

export default function Resources() {
  return (
    <div>
      <Head>
        <title>{getLiteral('resources:title')}</title>
        <meta
          name="description"
          content={getLiteral('resources:description')}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{getLiteral('resources:title')}</h1>

        {resources.map((resource) => (
          <div key={resource.title}>
            <Link href={resource.url}>{resource.title}</Link>
          </div>
        ))}
      </main>
    </div>
  )
}
