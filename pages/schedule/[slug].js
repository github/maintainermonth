import fs from 'fs'
import Head from 'next/head'

import { getDataFromMD } from '../../common/api'
import EventDetail from '../../components/event-detail/EventDetail'
import EventDetailWrapper from '../../components/event-detail/EventDetailWrapper'
import getOgImage from '../../components/og-image/getOgImage'

export default function EventDetailPage({ event, ogImage }) {
  return (
    <>
      <Head>
        <meta name="og:image" content={ogImage} />
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
  const event = getDataFromMD(`content/events/${slug}.md`)

  // TODO: refactor
  const ogImage = await getOgImage(event.title)

  return {
    props: {
      event,
      ogImage,
    },
  }
}
