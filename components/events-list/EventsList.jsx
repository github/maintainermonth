import md from 'markdown-it'
import clsx from 'clsx'

import Link from 'next/link'

import ButtonLink from '../button-link/ButtonLink'

import { getLiteral } from '../../common/i18n'
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
            <div className="events-list__chips">
              <EventTypeChip type={event.type} />
              <Link
                href={{ pathname: event.link }}
                aria-label={getLiteral('navigation:schedule')}
                className="events-list__more"
              >
                {getLiteral('actions:view-more')}
              </Link>
            </div>
            <DateTimeChip
              startTime={event.formattedDate.startTime}
              endTime={event.formattedDate.endTime}
            />

            <div>
              <a
                className="events-list__user"
                href={event.userLink}
                target="_blank"
                rel="noreferrer"
              >
                {event.userName}
              </a>

              <Link href={{ pathname: event.link }} className="events-list__link">
                {event.title}
              </Link>
            </div>

            <div
              className="events-list__text"
              dangerouslySetInnerHTML={{
                __html: md().render(event.content),
              }}
            />

            <PlayLink href={event.linkUrl}>
              {getLiteral(`event-button:${event.type}`)}
            </PlayLink>
          </div>
        </div>
      ))}
      < br />
      <div>
        <ButtonLink href="https://github.com/github/maintainermonth/issues/new?assignees=&labels=&template=add-to-calendar.yml&title=EVENT_NAME">Add your own activity</ButtonLink>
      </div>
    </section>
  )
}

export default EventsList
