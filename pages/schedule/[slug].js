import fs from 'fs'
import Head from 'next/head'
import { getEventBySlug, parseEvent } from '../../api/events'

import EventDetail from '../../components/event-detail/EventDetail'
import EventDetailWrapper from '../../components/event-detail/EventDetailWrapper'
import getOgImage from '../../components/og-image/getOgImage'

export default function EventDetailPage({ event, ogImage }) {
  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta
          name="description"
          content="Check out this GitHub Maintainers Month event"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:title" content={event.title} />
        <meta
          property="og:description"
          content="Check out this GitHub Maintainers Month event"
        />
        <meta property="og:image" content={ogImage} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={event.title} />
        <meta
          name="twitter:description"
          content="Check out this GitHub maintainers Month event"
        />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <EventDetailWrapper>
        <EventDetail event={event} isFullPage />
      </EventDetailWrapper>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync('content/events')

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const event = getEventBySlug(slug)
  const parsedEvent = parseEvent(event)

  // TODO: refactor
  const ogImage = await getOgImage(event.title)

  return {
    props: {
      event: parsedEvent,
      ogImage,
    },
  }
}
