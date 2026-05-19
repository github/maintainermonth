/* eslint-disable @next/next/no-img-element */
import { useMemo } from 'react'
import md from 'markdown-it'

const Postcard = ({ postcards }) => {
  const items = useMemo(() => postcards || [], [postcards])

  if (items.length === 0) {
    return (
      <section className="postcards">
        <p className="postcards__empty">No postcards yet.</p>
      </section>
    )
  }

  return (
    <section className="postcards">
      <div className="postcards__intro">
        <h2 className="postcards__heading">Love Letters</h2>
        <p className="postcards__subtitle">
          Postcards of appreciation for the maintainers who keep open source thriving.
        </p>
      </div>
      <div className="postcards__grid">
        {items.map((postcard, index) => (
          <article key={index} className="postcards__card">
            <div className="postcards__image-wrapper">
              <img
                className="postcards__image"
                src={postcard.image}
                alt={postcard.quote}
              />
            </div>
            <blockquote
              className="postcards__quote"
              dangerouslySetInnerHTML={{
                __html: md({ linkify: true }).render(postcard.quote || ''),
              }}
            />
          </article>
        ))}
      </div>
    </section>
  )
}

export default Postcard
