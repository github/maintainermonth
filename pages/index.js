import { useRef } from 'react'

import Head from 'next/head'

import { getLiteral } from '../common/i18n'
import { getDataFromMD, parseGetInvolvedData } from '../common/api'
import { getEvents, parseEvents } from '../api/events'

import Hero from '../components/home/hero/Hero'
import About from '../components/home/about/About'
import GetInvolved from '../components/home/get-involved/GetInvolved'
import Events from '../components/home/events/Events'
import AnchorNavigation from '../components/home/anchor-navigation/AnchorNavigation'

export default function Home({ hero, about, getInvolved, events, connection }) {
  const containerRef = useRef(null)

  return (
    <div>
      <Head>
        <title>{getLiteral('meta:title')}</title>
        <meta name="description" content={getLiteral('meta:description')} />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <AnchorNavigation containerRef={containerRef} />

        <div ref={containerRef}>
          <Hero
            date={hero.date}
            title={hero.title}
            buttonText={hero.buttonText}
          />
          <About
            title={about.title}
            image={about.image}
            content={about.content}
          />
          <GetInvolved
            title={getInvolved.title}
            content={getInvolved.content}
            examplesTitle={getInvolved.examplesTitle}
            examples={getInvolved.examples}
          />
          <Events
            title={events.title}
            list={events.list}
            connectionTitle={connection.title}
            connectionButtonText={connection.buttonText}
          />
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const hero = getDataFromMD('content/home/1-hero.md')
  const about = getDataFromMD('content/home/2-about.md')
  const getInvolved = parseGetInvolvedData(
    getDataFromMD('content/home/3-get-involved.md'),
  )
  const events = getDataFromMD('content/home/4-events.md')
  const connection = getDataFromMD('content/home/5-connection.md')

  const eventsList = parseEvents(getEvents())

  return {
    props: {
      hero,
      about,
      getInvolved,
      events: {
        ...events,
        list: eventsList,
      },
      connection,
    },
  }
}
