import { useEffect, useRef } from 'react'

import Head from 'next/head'

import { getLiteral } from '../common/i18n'
import { getDataFromMD, parseGetInvolvedData } from '../common/api'
import { getEvents, parseEvents } from '../api/events'

import Hero from '../components/home/hero/Hero'
import About from '../components/home/about/About'
import GetInvolved from '../components/home/get-involved/GetInvolved'
import Events from '../components/home/events/Events'
import AnchorNavigation from '../components/home/anchor-navigation/AnchorNavigation'
import { useBackground } from '../contexts/BackgroundContext'

export default function Home({ hero, about, getInvolved, events, connection }) {
  const containerRef = useRef(null)

  const { setAnimationStep } = useBackground()

  useEffect(() => {
    setAnimationStep(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Head>
        <title>{getLiteral('meta:title')}</title>
        <meta name="description" content={getLiteral('meta:description')} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:title" content={getLiteral('meta:title')} />
        <meta
          property="og:description"
          content={getLiteral('meta:description')}
        />
        <meta
          property="og:image"
          content="https://maintainermonth.github.com/images/og/generic.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={getLiteral('meta:title')} />
        <meta
          name="twitter:description"
          content={getLiteral('meta:description')}
        />
        <meta
          name="twitter:image"
          content="https://maintainermonth.github.com/images/og/generic.png"
        />
      </Head>

      <div>
        <AnchorNavigation containerRef={containerRef} />

        <div ref={containerRef}>
          <Hero
            date={hero.date}
            title={hero.title}
            buttonText={hero.buttonText}
          />
          <About title={about.title} content={about.content} />
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
      </div>
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
