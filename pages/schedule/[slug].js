import fs from 'fs'

import { getDataFromMD } from '../../common/api'
import EventDetail from '../../components/event-detail/EventDetail'
import EventDetailWrapper from '../../components/event-detail/EventDetailWrapper'

export default function EventDetailPage({ event }) {
  return (
    <EventDetailWrapper>
      <EventDetail event={event} isFullPage />
    </EventDetailWrapper>
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

  return {
    props: {
      event,
    },
  }
}
