import md from 'markdown-it'
import Link from 'next/link'

import * as ROUTES from '../../common/routes'
import DateTimeChip from '../date-time-chip/DateTimeChip'
import EventTypeChip from '../event-type-chip/EventTypeChip'

const EventsList = ({ events }) => {
  return (
    <section className="events-list">
      {events.map((event) => (
        <div key={event.slug} className="events-list__card">
          {/* TODO: add only when prev event has different date */}
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

            {/* TODO: add custom button */}
          </div>
        </div>
      ))}
    </section>
  )
}

export default EventsList
