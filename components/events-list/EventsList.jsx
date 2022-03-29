import md from 'markdown-it'
import clsx from 'clsx'

import Link from 'next/link'

import * as ROUTES from '../../common/routes'

import DateTimeChip from '../date-time-chip/DateTimeChip'
import EventTypeChip from '../event-type-chip/EventTypeChip'
import OutlinedLink from '../outlined-link/OutlinedLink'

const EventsList = ({ events }) => {
  return (
    <section className="events-list">
      {events.map((event, index) => (
        <div
          key={event.slug}
          className={clsx('events-list__card', {
            'same-date': index > 0 && event.date === events[index - 1].date,
          })}
        >
          <div className="events-list__date">
            <DateTimeChip date={event.date} />
          </div>

          <div className="events-list__event">
            <EventTypeChip type={event.type} />
            <DateTimeChip
              startTime={event.UTCStartTime}
              endTime={event.UTCEndTime}
            />

            <Link href={ROUTES.EVENT.linkTo({ slug: event.slug })}>
              <a className="events-list__link">{event.title}</a>
            </Link>

            <div
              className="events-list__text"
              dangerouslySetInnerHTML={{
                __html: md().render(event.content),
              }}
            />

            <OutlinedLink href={event.linkUrl}>{event.linkTitle}</OutlinedLink>
          </div>
        </div>
      ))}
    </section>
  )
}

export default EventsList
