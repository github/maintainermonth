import Head from 'next/head'
import Link from 'next/link'

import Chip from '../../components/chip/Chip'
import { getAcademiaPostBySlug, getAcademiaPosts } from '../../common/academia'

const renderProjectLinks = (projectRepo, projectWebsite) => {
  const links = []

  if (projectRepo) {
    links.push(
      <a key="repo" href={projectRepo} target="_blank" rel="noreferrer">
        Repo
      </a>,
    )
  }

  if (projectWebsite) {
    links.push(
      <a key="website" href={projectWebsite} target="_blank" rel="noreferrer">
        Website
      </a>,
    )
  }

  if (links.length === 0) {
    return 'N/A'
  }

  return links.reduce((accumulator, link, index) => {
    if (index === 0) {
      return [link]
    }

    return [...accumulator, ' - ', link]
  }, [])
}

export default function AcademiaPostPage({ post }) {
  const pageTitle = `Maintainer Spotlight: ${post.projectName}`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={post.description} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={post.description} />
        <meta
          property="og:image"
          content="https://maintainermonth.github.com/images/og/generic.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={post.description} />
        <meta
          name="twitter:image"
          content="https://maintainermonth.github.com/images/og/generic.png"
        />
      </Head>

      <article className="academia-post">
        <Link className="academia-post__back-link" href="/academia">
          {'← return to list'}
        </Link>

        <h1 className="academia-post__title">{pageTitle}</h1>

        <p className="academia-post__subtitle">
          A conversation about building open source in academia
        </p>

        <hr className="academia-post__divider" />

        <dl className="academia-post__meta">
          <div className="academia-post__meta-row">
            <dt>Maintainer:</dt>
            <dd>{post.name || 'N/A'}</dd>
          </div>
          <div className="academia-post__meta-row">
            <dt>Institution:</dt>
            <dd>{post.institution || 'N/A'}</dd>
          </div>
          <div className="academia-post__meta-row">
            <dt>Department:</dt>
            <dd>{post.department || 'N/A'}</dd>
          </div>
          <div className="academia-post__meta-row">
            <dt>Badges:</dt>
            <dd>
              {post.badges.length > 0 ? (
                <div className="academia-post__badges">
                  {post.badges.map((badge) => (
                    <Chip key={badge} label={badge} />
                  ))}
                </div>
              ) : (
                'N/A'
              )}
            </dd>
          </div>
          <div className="academia-post__meta-row">
            <dt>Project links:</dt>
            <dd>{renderProjectLinks(post.projectRepo, post.projectWebsite)}</dd>
          </div>
        </dl>

        <hr className="academia-post__divider" />

        <div
          className="academia-post__content"
          dangerouslySetInnerHTML={{ __html: post.htmlContent }}
        />

        <hr className="academia-post__divider" />

        <p className="academia-post__footer-links">
          {renderProjectLinks(post.projectRepo, post.projectWebsite)}
        </p>
      </article>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAcademiaPosts().map((post) => ({
    params: { slug: post.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const post = getAcademiaPostBySlug(slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
  }
}
