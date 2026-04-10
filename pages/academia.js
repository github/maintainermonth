import { useEffect } from 'react'
import Head from 'next/head'

import ButtonLink from '../components/button-link/ButtonLink'
import Chip from '../components/chip/Chip'
import { useBackground } from '../contexts/BackgroundContext'
import { getAcademiaPosts } from '../common/academia'

export default function Academia({ posts }) {
  const { setAnimationStep } = useBackground()

  useEffect(() => {
    setAnimationStep(6)
  }, [setAnimationStep])

  return (
    <div>
      <Head>
        <title>Maintainers in Academia</title>
        <meta
          name="description"
          content="Stories from maintainers building open source projects in academia."
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:title" content="Maintainers in Academia" />
        <meta
          property="og:description"
          content="Stories from maintainers building open source projects in academia."
        />
        <meta
          property="og:image"
          content="https://maintainermonth.github.com/images/og/generic.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maintainers in Academia" />
        <meta
          name="twitter:description"
          content="Stories from maintainers building open source projects in academia."
        />
        <meta
          name="twitter:image"
          content="https://maintainermonth.github.com/images/og/generic.png"
        />
      </Head>

      <section className="academia-list">
        <div className="academia-list__intro">
          <h1>Maintainers in Academia</h1>
          <p>
            Maintainer stories from researchers and educators building open
            source in universities and institutions around the world.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="academia-list__empty">
            No maintainer stories have been added yet. Check back soon.
          </p>
        ) : (
          posts.map((post) => (
            <article key={post.slug} className="academia-list__item">
              <div className="academia-list__main">
                <div className="academia-list__flex">
                  <div>
                    <h2 className="academia-list__title">{post.projectName}</h2>
                    <p className="academia-list__subtitle">{post.name}</p>
                    {post.badges?.length > 0 ? (
                      <div className="academia-list__badges">
                        {post.badges.map((badge) => (
                          <Chip key={badge} label={badge} />
                        ))}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <p className="academia-list__description">{post.description}</p>
                    <ButtonLink href={`/academia/${post.slug}`}>
                        read their maintainer story
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </article>
          ))
        )}
      </section>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: getAcademiaPosts(),
    },
  }
}
