import Head from "next/head"
import fs from "fs"
import matter from "gray-matter"
import Link from "next/link"

import { t } from "../common/i18n"

export default function Home({ hero, events }) {
  return (
    <div>
      <Head>
        <title>{t("meta:title")}</title>
        <meta name="description" content={t("meta:description")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <h1>{hero.title}</h1>
        </section>
        <section>
          {events.map(({ slug, frontmatter }) => (
            <div key={slug}>
              <Link href={`/events/${slug}`}>{frontmatter.title}</Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  // TODO: refactor
  const heroMD = fs.readFileSync("content/home/1-hero.md", "utf-8")
  const { data: frontmatter, content } = matter(heroMD)
  const hero = { ...frontmatter, content }

  const eventFiles = fs.readdirSync("content/events")

  const events = eventFiles.map((fileName) => {
    // TODO: rename
    const slug = fileName.replace(".md", "")
    const readFile = fs.readFileSync(`content/events/${fileName}`, "utf-8")
    const { data: frontmatter } = matter(readFile)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      hero,
      // about,
      // getInvolved,
      // schedule,
      // connection,
      events,
    },
  }
}
