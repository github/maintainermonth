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
      <div className="events-list__header">
        <div className="events-list__header-content">
          <h1 className="events-list__title">{getLiteral('schedule:title')}</h1>
          <p className="events-list__subtitle">{getLiteral('schedule:description')}</p>
          <ButtonLink 
            href="https://github.com/github/maintainermonth/issues/new?template=add-to-calendar.yml" 
            isExternal={true}
            className="events-list__add-button"
          >
            {getLiteral('schedule:add-event')}
          </ButtonLink>
        </div>
      </div>

      <div className="events-list__grid">
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
              <div className="events-list__meta">
                <a
                  className="events-list__user"
                  href={event.userLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {event.userName}
                </a>
                <Link href={event.link} className="events-list__link">
                  {event.title}
                </Link>
                <DateTimeChip
                  startTime={event.formattedDate.startTime}
                  endTime={event.formattedDate.endTime}
                />
              </div>

              <div className="events-list__chips">
                <EventTypeChip type={event.type} />
                {event.language && <Chip label={event.language} />}
                {event.location && <Chip label={event.location} />}
              </div>

              <div className="events-list__info">
                <p 
                  className="events-list__text"
                  dangerouslySetInnerHTML={{
                    __html: md().render(event.description || ''),
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsList;
