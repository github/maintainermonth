import fs from 'fs'
import Head from 'next/head'
import Link from 'next/link'

import { t } from '../common/i18n'
import { getRelativeURL } from '../common/routes'
import { getDataFromMD } from '../common/data'

export default function Schedule({ events }) {
  return (
    <div>
      <Head>
        <title>{t('schedule:title')}</title>
        <meta name="description" content={t('schedule:description')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{t('schedule:title')}</h1>

        <section>
          {events.map((event) => (
            <div key={event.slug}>
              <Link href={getRelativeURL(`/events/${event.slug}`)}>
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
