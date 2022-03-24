import * as ROUTES from '../../../common/routes'
import ButtonLink from '../../button-link/ButtonLink'

import EventDetail from '../../event-detail/EventDetail'

const Events = ({ title, ctaTitle, ctaButtonText, todayEvents }) => {
  return (
    <section className="events">
      <div className="events__content">
        <div className="events__header">
          <h2 className="events__title">{title}</h2>
        </div>

        <div className="events__list">
          {todayEvents.map((event, index) => (
            <EventDetail
              key={event.slug}
              event={event}
              reverseColumns={index % 2 !== 0}
            />
          ))}
        </div>
      </div>

      <div className="events__cta">
        <p className="events__cta-title">{ctaTitle}</p>

        <ButtonLink href={ROUTES.SCHEDULE.path}>{ctaButtonText}</ButtonLink>
      </div>
    </section>
  )
}

export default Events
