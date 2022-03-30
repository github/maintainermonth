import md from 'markdown-it'
import clsx from 'clsx'

import EventTypeChip from '../event-type-chip/EventTypeChip'

import IconVideo from '../../public/icons/video'
import DateTimeChip from '../date-time-chip/DateTimeChip'

// TODO: title heading for SEO (titleComponent?)
const EventDetail = ({ event, reverseColumns, isFullPage }) => {
  const classes = clsx('event-detail', {
    'reverse-columns': reverseColumns,
    'full-page': isFullPage,
  })

  return (
    <article className={classes}>
      <div className="event-detail__info">
        <EventTypeChip type={event.type} />
        <DateTimeChip
          date={event.formattedDate.date}
          startTime={event.formattedDate.startTime}
          endTime={event.formattedDate.endTime}
        />
        <p className="event-detail__title">{event.title}</p>
        <div
          className="event-detail__text"
          dangerouslySetInnerHTML={{
            __html: md().render(event.content),
          }}
        />
      </div>
      <div className="event-detail__link-wrapper">
        <a className="event-detail__link" href={event.linkUrl}>
          {event.linkTitle} <IconVideo />
        </a>
      </div>
    </article>
  )
}

export default EventDetail
