import fs from 'fs'
import Head from 'next/head'
import Link from 'next/link'

import { getLiteral } from '../common/i18n'
import { getRelativeURL } from '../common/routes'
import { getDataFromMD } from '../common/data'

export default function Home({ hero, events }) {
  return (
    <div>
      <Head>
        <title>{getLiteral('meta:title')}</title>
        <meta name="description" content={getLiteral('meta:description')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <h1>{hero.title}</h1>
        </section>
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
  const hero = getDataFromMD('content/home/1-hero.md')
  const about = getDataFromMD('content/home/2-about.md')
  const getInvolved = getDataFromMD('content/home/3-get-involved.md')
  const schedule = getDataFromMD('content/home/4-schedule.md')
  const connection = getDataFromMD('content/home/5-connection.md')

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
      hero,
      about,
      getInvolved,
      schedule,
      connection,
      events,
    },
  }
}
