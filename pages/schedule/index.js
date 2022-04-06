import Head from 'next/head'

import { getLiteral } from '../../common/i18n'
import { getEvents, parseEvents } from '../../api/events'

import EventsList from '../../components/events-list/EventsList'

export default function Schedule({ events }) {
  return (
    <div>
      <Head>
        <title>
          {getLiteral('schedule:title')} - {getLiteral('meta:title')}
        </title>
        <meta name="description" content={getLiteral('schedule:description')} />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <EventsList events={events} />
    </div>
  )
}

export async function getStaticProps() {
  const events = parseEvents(getEvents())

  return {
    props: {
      events,
    },
  }
}
