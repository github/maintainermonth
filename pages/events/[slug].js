import fs from 'fs'
import md from 'markdown-it'
import Link from 'next/link'

import { getRelativeURL } from '../../common/routes'
import { getDataFromMD } from '../../common/api'

export default function EventDetail({ event }) {
  return (
    <div>
      <h1>{event.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(event.content) }} />
      <Link href={getRelativeURL('/')}>Back to home</Link>
    </div>
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
