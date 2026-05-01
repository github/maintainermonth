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


const CURRENT_YEAR = 2026

const buildCalendarDate = (dateStr, timeStr) => {
  if (!dateStr || !timeStr || timeStr === 'TBD') return null
  const [month, day] = dateStr.split('/')
  const [hour, minute] = timeStr.split(':')
  const d = new Date(Date.UTC(CURRENT_YEAR, parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute)))
  return d.toISOString().replace(/[-:]/g, '').replace('.000', '').replace(/\.\d{3}/, '')
}

const getGoogleCalendarUrl = (event) => {
  const start = buildCalendarDate(event.date, event.UTCStartTime)
  const end = buildCalendarDate(event.endDate || event.date, event.UTCEndTime)
  if (!start || !end) return null
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${start}/${end}`,
    details: event.content ? event.content.substring(0, 500) : '',
    location: event.location || '',
  })
  if (event.linkUrl) params.set('details', `${event.linkUrl}\n\n${params.get('details')}`)
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

const getIcsContent = (event) => {
  const start = buildCalendarDate(event.date, event.UTCStartTime)
  const end = buildCalendarDate(event.endDate || event.date, event.UTCEndTime)
  if (!start || !end) return null
  const description = event.linkUrl ? `${event.linkUrl}\n\n${(event.content || '').substring(0, 500)}` : (event.content || '').substring(0, 500)
  return `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${start}
DTEND:${end}
SUMMARY:${event.title}
DESCRIPTION:${description.replace(/\n/g, '\\n')}
LOCATION:${event.location || ''}
URL:${event.linkUrl || ''}
END:VEVENT
END:VCALENDAR`
}

const downloadIcs = (event) => {
  const ics = getIcsContent(event)
  if (!ics) return
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${event.title.replace(/[^a-zA-Z0-9]/g, '-')}.ics`
  a.click()
  URL.revokeObjectURL(url)
}

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
            <Chip
              label={
                event.formattedDate.endDate
                  ? `${event.formattedDate.date} - ${event.formattedDate.endDate}`
                  : event.formattedDate.date
              }
            />
            <EventTypeChip type={event.type} />
            {event.language && <Chip label={event.language} />}
            {event.location && <Chip label={event.location} variant="location" />}
          </div>
          <DateTimeChip
            startTime={event.formattedDate.startTime}
            endTime={event.formattedDate.endTime}
            timeDisplay={event.formattedDate.timeDisplay}
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
            <h3 className="event-detail__title-wrapper">
              <Link
                href={{ pathname: event.link }}
                className="event-detail__title"
              >
                {event.title}
              </Link>
            </h3>
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
          <div className="event-detail__calendar-links">
            {getGoogleCalendarUrl(event) && (
              <a
                className="event-detail__calendar-link"
                href={getGoogleCalendarUrl(event)}
                target="_blank"
                rel="noreferrer"
              >
                Add to Google Calendar
              </a>
            )}
            {getIcsContent(event) && (
              <button
                className="event-detail__calendar-link"
                onClick={() => downloadIcs(event)}
                type="button"
              >
                Download .ics
              </button>
            )}
          </div>
        </div>
      ) : null}
    </article>
  )
}

export default EventDetail
