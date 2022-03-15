import fs from "fs"
import matter from "gray-matter"
import md from "markdown-it"
import Link from "next/link"

import { getRelativeURL } from "../../common/routes"

export default function EventDetail({ frontmatter, content }) {
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      <Link href={getRelativeURL("/")}>Back to home</Link>
    </div>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync("content/events")

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }))

  return {
    paths,
    fallback: false, // TODO: check fallback
  }
}

export async function getStaticProps({ params: { slug } }) {
  // TODO: refactor and rename
  const fileName = fs.readFileSync(`content/events/${slug}.md`, "utf-8")
  const { data: frontmatter, content } = matter(fileName)
  return {
    props: {
      frontmatter,
      content,
    },
  }
}
