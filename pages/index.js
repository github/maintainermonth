import { useEffect, useRef } from 'react'

import Head from 'next/head'

import { getLiteral } from '../common/i18n'
import { getDataFromMD, parseGetInvolvedData } from '../common/api'
import { getEvents, parseEvents } from '../api/events'
import * as ROUTES from '../common/routes'

import Hero from '../components/home/hero/Hero'
import About from '../components/home/about/About'
import GetInvolved from '../components/home/get-involved/GetInvolved'
import Events from '../components/home/events/Events'
import AnchorNavigation from '../components/home/anchor-navigation/AnchorNavigation'
import { useBackground } from '../contexts/BackgroundContext'
import News from '../components/home/news/News'

export default function Home({ hero, about, news, getInvolved, events, connection, maintainerOptions, partnerOptions }) {
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
          content="https://maintainermonth.github.com/images/og/generic.png?year=2023"
        />
      </Head>

      <div>
        <AnchorNavigation containerRef={containerRef} />

        <div ref={containerRef}>
          <Hero
            date={hero.date}
            title={hero.title}
            buttonText={hero.buttonText}
            buttonLink={ROUTES.SCHEDULE.path}
          />
          <About title={about.title} content={about.content} theme1={about.theme1} theme2={about.theme2}/>
          <News
            news={news.news}
            title={news.title}
          />
          <GetInvolved
            title={getInvolved.title}
            content={getInvolved.content}
            examplesTitle={getInvolved.examplesTitle}
            examples={getInvolved.examples}
            maintainersTitle={getInvolved.maintainersTitle}
            maintainerOptions={maintainerOptions.content}
            partnersTitle={getInvolved.partnersTitle}
            partnerOptions={partnerOptions.content}
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
  const news = getDataFromMD('content/home/3-news.md')
  const getInvolved = parseGetInvolvedData(
    getDataFromMD('content/home/4-get-involved.md'),
  )
  const maintainerOptions = getDataFromMD('content/home/4-1-get-involved-maintainers.md')
  const partnerOptions = getDataFromMD('content/home/4-2-get-involved-partners.md')
  const events = getDataFromMD('content/home/5-events.md')
  const connection = getDataFromMD('content/home/6-connection.md')

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
      maintainerOptions,
      partnerOptions,
      news
    },
  }
}
