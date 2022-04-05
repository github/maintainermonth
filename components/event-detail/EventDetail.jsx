import { useEffect } from 'react'

import md from 'markdown-it'
import clsx from 'clsx'

import EventTypeChip from '../event-type-chip/EventTypeChip'

import { useBackground } from '../../contexts/BackgroundContext'

import IconArrowRight from '../../public/icons/arrow-right'
import DateTimeChip from '../date-time-chip/DateTimeChip'
import Chip from '../chip/Chip'
import PlayLink from '../play-link/PlayLink'

// TODO: title heading for SEO (titleComponent?)
const EventDetail = ({ event, reverseColumns, isFullPage }) => {
  const { setAnimationStep } = useBackground()

  const classes = clsx('event-detail', {
    'reverse-columns': reverseColumns,
    'full-page': isFullPage,
  })

  useEffect(() => {
    setAnimationStep(6)
  }, [setAnimationStep])

  return (
    <article className={classes}>
      <div className="event-detail__info">
        <div className="event-detail__meta">
          <div className="event-detail__column">
            <Chip label={event.formattedDate.date} />
            <EventTypeChip type={event.type} />
          </div>
          <DateTimeChip
            date={event.formattedDate.date}
            startTime={event.formattedDate.startTime}
            endTime={event.formattedDate.endTime}
          />
        </div>
        <div>
          <a
            className="event-detail__user"
            href={event.userLink}
            target="_blank"
            rel="noreferrer"
          >
            {event.userName}
          </a>
          <p className="event-detail__title">{event.title}</p>
          {isFullPage ? (
            <div
              className="event-detail__text"
              dangerouslySetInnerHTML={{
                __html: md().render(event.content),
              }}
            />
          ) : null}
        </div>
        {!isFullPage ? (
          <PlayLink href={event.linkUrl}>{event.linkTitle}</PlayLink>
        ) : null}
      </div>
      {isFullPage ? (
        <div className="event-detail__link-wrapper">
          <a className="event-detail__link" href={event.linkUrl}>
            {event.linkTitle} <IconArrowRight />
          </a>
        </div>
      ) : null}
    </article>
  )
}

export default EventDetail
