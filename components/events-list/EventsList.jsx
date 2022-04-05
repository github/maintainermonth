import md from 'markdown-it'
import clsx from 'clsx'

import Link from 'next/link'

import * as ROUTES from '../../common/routes'

import DateTimeChip from '../date-time-chip/DateTimeChip'
import EventTypeChip from '../event-type-chip/EventTypeChip'
import PlayLink from '../play-link/PlayLink'
import Chip from '../chip/Chip'

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
            <Chip label={event.formattedDate.date} />
          </div>

          <div className="events-list__event">
            <EventTypeChip type={event.type} />
            <DateTimeChip
              startTime={event.formattedDate.startTime}
              endTime={event.formattedDate.endTime}
            />

            <div>
              <a
                className="event-detail__user"
                href={event.userLink}
                target="_blank"
                rel="noreferrer"
              >
                {event.userName}
              </a>

              <Link href={ROUTES.EVENT.linkTo({ slug: event.slug })}>
                <a className="events-list__link">{event.title}</a>
              </Link>
            </div>

            <div
              className="events-list__text"
              dangerouslySetInnerHTML={{
                __html: md().render(event.content),
              }}
            />

            <PlayLink href={event.linkUrl}>{event.linkTitle}</PlayLink>
          </div>
        </div>
      ))}
    </section>
  )
}

export default EventsList
