import fs from "fs"
import matter from "gray-matter"
import md from "markdown-it"
import Link from "next/link"

export default function EventPage({ frontmatter, content }) {
  return (
    <div className="prose mx-auto">
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      <Link href="/">Back to home</Link>
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
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`content/events/${slug}.md`, "utf-8")
  const { data: frontmatter, content } = matter(fileName)
  return {
    props: {
      frontmatter,
      content,
    },
  }
}
