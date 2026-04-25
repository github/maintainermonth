import { useMemo, useState } from 'react'

import Chip from '../chip/Chip'
import { getLiteral } from '../../common/i18n'
import ShipsFilter from './ShipsFilter'

const formatDate = (dateString) => {
  const date = new Date(dateString + 'T00:00:00')
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

const Ships = ({ ships }) => {
  const [selected, setSelected] = useState('all')

  const sorted = useMemo(
    () =>
      ships
        ? [...ships].sort((a, b) => new Date(b.date) - new Date(a.date))
        : [],
    [ships]
  )

  const categories = useMemo(() => {
    const counts = sorted.reduce((acc, ship) => {
      const value = ship.category
      if (!value) return acc
      acc[value] = (acc[value] || 0) + 1
      return acc
    }, {})

    return Object.keys(counts)
      .sort((a, b) => a.localeCompare(b))
      .map((value) => ({ value, count: counts[value] }))
  }, [sorted])

  if (!ships || ships.length === 0) {
    return (
      <section className="ships">
        <p className="ships__empty">
          {getLiteral('ships:empty')}
        </p>
      </section>
    )
  }

  const filtered =
    selected === 'all' ? sorted : sorted.filter((s) => s.category === selected)

  return (
    <section className="ships">
      <div className="ships__intro">
        <h2 className="ships__heading">{getLiteral('ships:title')}</h2>
        <p className="ships__subtitle">{getLiteral('ships:description')}</p>
        <ShipsFilter
          categories={categories}
          selected={selected}
          onSelect={setSelected}
          totalShips={sorted.length}
        />
      </div>
      {filtered.length === 0 ? (
        <p className="ships__empty">
          {getLiteral('ships:empty-no-matches')}
        </p>
      ) : (
        <div className="ships__grid">
          {filtered.map((ship) => (
          <article key={`${ship.url}-${ship.title}`} className="ships__card">
            <a
              className="ships__link"
              href={ship.url}
              target="_blank"
              rel="noreferrer"
            >
              <p className="ships__date">{formatDate(ship.date)}</p>
              <h3 className="ships__title">
                {ship.title}
                <svg
                  className="ships__external-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="14"
                  height="14"
                  fill="currentColor"
                >
                  <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5H4.56l7.22 7.22a.75.75 0 1 1-1.06 1.06L3.5 4.56v2.69a.75.75 0 0 1-1.5 0v-3.5A1.75 1.75 0 0 1 3.75 2z" />
                  <path d="M13 7.75a.75.75 0 0 1 1.5 0v4.5A1.75 1.75 0 0 1 12.75 14h-9A1.75 1.75 0 0 1 2 12.25v-9C2 2.784 2.784 2 3.75 2h4.5a.75.75 0 0 1 0 1.5h-4.5a.25.25 0 0 0-.25.25v9c0 .138.112.25.25.25h9a.25.25 0 0 0 .25-.25v-4.5z" />
                </svg>
              </h3>
              <p className="ships__description">{ship.description}</p>
              <div className="ships__chips">
                <Chip label={ship.category} />
              </div>
            </a>
          </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Ships
