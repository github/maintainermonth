import EventDetail from '../../event-detail/EventDetail'
import SectionDivider from '../../section-divider/SectionDivider'
import Connection from '../connection/Connection'

import useIncomingEvents from './useIncomingEvents'

const Events = ({ title, list, connectionTitle, connectionButtonText }) => {
  const events = useIncomingEvents(list)

  return (
    <section className="events">
      <div className="events__content">
        <SectionDivider title={title} />

        <div className="events__list">
          {events.map((event, index) => (
            <EventDetail
              key={event.slug}
              event={event}
              reverseColumns={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
      <Connection title={connectionTitle} buttonText={connectionButtonText} />
    </section>
  )
}

export default Events
