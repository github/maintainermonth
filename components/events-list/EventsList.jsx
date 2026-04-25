import { useMemo, useState } from 'react'
import md from 'markdown-it'
import clsx from 'clsx'

import Link from 'next/link'

import ButtonLink from '../button-link/ButtonLink'

import { getLiteral } from '../../common/i18n'
import * as ROUTES from '../../common/routes'

import DateTimeChip from '../date-time-chip/DateTimeChip'
import EventFilter from '../event-filter/EventFilter'
import TYPES from '../event-type-chip/types'
import EventTypeChip from '../event-type-chip/EventTypeChip'
import PlayLink from '../play-link/PlayLink'
import Chip from '../chip/Chip'
const EventsList = ({ events }) => {
  const dateLabel = (event) =>
    `${event.formattedDate.date} to ${event.formattedDate.endDate}`

  const [selectedType, setSelectedType] = useState('all')

  const eventTypeOptions = useMemo(() => {
    const counts = events.reduce((acc, event) => {
      acc[event.type] = (acc[event.type] || 0) + 1
      return acc
    }, {})

    return Object.keys(TYPES)
      .filter((type) => counts[type])
      .map((type) => ({
        value: type,
        count: counts[type],
      }))
  }, [events])

  const filteredEvents =
    selectedType === 'all'
      ? events
      : events.filter((event) => event.type === selectedType)

  return (
    <section className="events-list">
      <div className="events-list__header">
        <div className="events-list__header-content">
          <h1 className="events-list__title">{getLiteral('schedule:title')}</h1>
          <p className="events-list__subtitle">
            {getLiteral('schedule:description')}
          </p>
          <div className="events-list__header-actions">
            <ButtonLink
              href="https://github.com/github/maintainermonth/issues/new?template=add-to-calendar.yml"
              isExternal={true}
              className="events-list__add-button"
            >
              {getLiteral('schedule:add-event')}
            </ButtonLink>
            <a
              href="/maintainer-month-2026.ics"
              download
              className="events-list__ics-button"
              aria-label={getLiteral('schedule:ics-label')}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4.75 0a.75.75 0 0 1 .75.75V2h5V.75a.75.75 0 0 1 1.5 0V2H13a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h.75V.75A.75.75 0 0 1 4.75 0ZM3.5 7v6a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V7h-9Z" />
              </svg>
              {getLiteral('schedule:ics-download')}
            </a>
          </div>
          <EventFilter
            eventTypes={eventTypeOptions}
            selectedType={selectedType}
            onSelectType={setSelectedType}
            totalEvents={events.length}
          />
        </div>
      </div>

      <div className="events-list__grid">
        {filteredEvents.map((event, index) => (
          <div
            key={event.slug}
            className={clsx('events-list__card', {
              'same-date':
                index > 0 && event.date === filteredEvents[index - 1].date,
            })}
          >
            <div className="events-list__date">
              {event.formattedDate.endDate ? (
                <Chip label={dateLabel(event)} />
              ) : (
                <Chip label={event.formattedDate.date} />
              )}
            </div>

            <div className="events-list__event">
              <div className="events-list__meta">
                <a
                  className="events-list__user"
                  href={event.userLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {event.userName}
                </a>
                <h3 className="events-list__event-title">
                  <Link href={event.link} className="events-list__link">
                    {event.title}
                  </Link>
                </h3>
                <DateTimeChip
                  startTime={event.formattedDate.startTime}
                  endTime={event.formattedDate.endTime}
                  timeDisplay={event.formattedDate.timeDisplay}
                />
              </div>

              <div className="events-list__chips">
                <EventTypeChip type={event.type} />
                {event.language && <Chip label={event.language} />}
                {event.location && (
                  <Chip label={event.location} variant="location" />
                )}
              </div>

              <div className="events-list__info">
                <div
                  className="events-list__text"
                  dangerouslySetInnerHTML={{
                    __html: md().render(event.metaDesc || ''),
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {events.length === 0 ? (
        <p className="events-list__empty">
          {getLiteral('schedule:empty-no-events')}{' '}
          <a
            href="https://github.com/github/maintainermonth/issues/new?assignees=&labels=&template=add-to-calendar.yml&title=EVENT_NAME"
            target="_blank"
            rel="noreferrer"
          >
            {getLiteral('schedule:empty-host-link')}
          </a>
        </p>
      ) : null}

      {events.length > 0 && filteredEvents.length === 0 ? (
        <p className="events-list__empty">
          {getLiteral('schedule:empty-no-matches')}
        </p>
      ) : null}
    </section>
  )
}

export default EventsList
