import fs from 'fs'
import Head from 'next/head'
import Link from 'next/link'

import { getLiteral } from '../../common/i18n'
import * as ROUTES from '../../common/routes'

import { getDataFromMD } from '../../common/api'

export default function Schedule({ events }) {
  return (
    <div>
      <Head>
        <title>{getLiteral('schedule:title')}</title>
        <meta name="description" content={getLiteral('schedule:description')} />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <h1>{getLiteral('schedule:title')}</h1>

        <section>
          {events.map((event) => (
            <div key={event.slug}>
              <Link href={ROUTES.EVENT.linkTo({ slug: event.slug })}>
                {event.title}
              </Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const eventFiles = fs.readdirSync('content/events')

  const events = eventFiles.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const event = getDataFromMD(`content/events/${fileName}`)

    return {
      slug,
      ...event,
    }
  })

  return {
    props: {
      events,
    },
  }
}
