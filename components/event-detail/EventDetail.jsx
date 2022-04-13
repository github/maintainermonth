import { useEffect } from 'react'
import Link from 'next/link'

import md from 'markdown-it'
import clsx from 'clsx'

import { useBackground } from '../../contexts/BackgroundContext'
import * as ROUTES from '../../common/routes'
import { getLiteral } from '../../common/i18n'

import EventTypeChip from '../event-type-chip/EventTypeChip'
import IconArrowRight from '../../public/icons/arrow-right'
import DateTimeChip from '../date-time-chip/DateTimeChip'
import Chip from '../chip/Chip'
import PlayLink from '../play-link/PlayLink'

const EventDetail = ({ event, reverseColumns, isFullPage }) => {
  const { setAnimationStep } = useBackground()

  const classes = clsx('event-detail', {
    'reverse-columns': reverseColumns,
    'full-page': isFullPage,
  })

  useEffect(() => {
    setAnimationStep(7)
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
          {isFullPage ? (
            <h1 className="event-detail__title">{event.title}</h1>
          ) : (
            <Link href={ROUTES.EVENT.linkTo({ slug: event.slug })}>
              <a className="event-detail__title">{event.title}</a>
            </Link>
          )}

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
          <PlayLink href={event.linkUrl}>
            {getLiteral(`event-button:${event.type}`)}
          </PlayLink>
        ) : null}
      </div>
      {isFullPage ? (
        <div className="event-detail__link-wrapper">
          <a
            className="event-detail__link"
            href={event.linkUrl}
            target="_blank"
            rel="noreferrer"
          >
            {getLiteral(`event-button:${event.type}`)} <IconArrowRight />
          </a>
        </div>
      ) : null}
    </article>
  )
}

export default EventDetail
