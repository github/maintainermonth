import { useEffect } from 'react'
import Head from 'next/head'

import { getLiteral } from '../../common/i18n'
import { getEvents, parseEvents } from '../../api/events'
import { useBackground } from '../../contexts/BackgroundContext'

import EventsList from '../../components/events-list/EventsList'

export default function Schedule({ events }) {
  const { setAnimationStep } = useBackground()

  useEffect(() => {
    setAnimationStep(6)
  }, [setAnimationStep])

  return (
    <div>
      <Head>
        <title>
          {getLiteral('schedule:title')} - {getLiteral('meta:title')}
        </title>
        <meta name="description" content={getLiteral('schedule:description')} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:title" content={getLiteral('schedule:title')} />
        <meta
          property="og:description"
          content={getLiteral('schedule:description')}
        />
        <meta
          property="og:image"
          content="https://maintainermonth.github.com/images/og/generic.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={getLiteral('schedule:title')} />
        <meta
          name="twitter:description"
          content={getLiteral('schedule:description')}
        />
        <meta
          name="twitter:image"
          content="https://maintainermonth.github.com/images/og/generic.png"
        />
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
