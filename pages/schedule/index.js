import fs from 'fs'
import Head from 'next/head'

import { getLiteral } from '../../common/i18n'
import { getDataFromMD } from '../../common/api'

import EventsList from '../../components/events-list/EventsList'

export default function Schedule({ events }) {
  return (
    <div>
      <Head>
        <title>{getLiteral('schedule:title')}</title>
        <meta name="description" content={getLiteral('schedule:description')} />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <EventsList events={events} />
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
