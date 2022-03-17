import fs from 'fs'
import Head from 'next/head'

import { getLiteral } from '../common/i18n'
import { getDataFromMD, parseGetInvolvedData } from '../common/api'

import Hero from '../components/home/hero/Hero'
import About from '../components/home/about/About'
import GetInvolved from '../components/home/get-involved/GetInvolved'
import Events from '../components/home/events/Events'
import Connection from '../components/home/connection/Connection'

export default function Home({ hero, about, getInvolved, events, connection }) {
  return (
    <div>
      <Head>
        <title>{getLiteral('meta:title')}</title>
        <meta name="description" content={getLiteral('meta:description')} />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
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
          examplesTitle={getInvolved.examplesTitle}
          examples={getInvolved.examples}
        />
        <Events
          title={events.title}
          ctaTitle={events.ctaTitle}
          ctaButtonText={events.ctaButtonText}
          todayEvents={events.todayEvents}
        />
        <Connection
          title={connection.title}
          buttonText={connection.buttonText}
          buttonLink={connection.buttonLink}
        />
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

  const eventFiles = fs.readdirSync('content/events')

  const todayEvents = eventFiles.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const event = getDataFromMD(`content/events/${fileName}`)

    // TODO: filter events by current day

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
      events: {
        ...events,
        todayEvents,
      },
      connection,
    },
  }
}
