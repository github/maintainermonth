import Chip from '../chip/Chip'

const LibraryLinks = ({ links }) => {
  return (
    <section className="library-links">
      {links.map((link) => (
        <article key={link.title} className="library-links__item">
          <div className="library-links__info">
            <p className="library-links__author">{link.author}</p>
            <a
              className="library-links__link"
              href={link.link}
              target="_blank"
              rel="noreferrer"
            >
              {link.title}
            </a>
          </div>
          <p className="library-links__description">{link.description}</p>
          <div className="library-links__chips">
            <Chip label={link.type} />
            <p className="library-links__topics">{link.topics}</p>
          </div>
        </article>
      ))}
    </section>
  )
}

export default LibraryLinks
