import EventDetail from '../../event-detail/EventDetail'
import Connection from '../connection/Connection'

import useIncomingEvents from './useIncomingEvents'

const Events = ({ title, list, connectionTitle, connectionButtonText }) => {
  const events = useIncomingEvents(list)

  return (
    <section className="events">
      <div className="events__content">
        <h2 className="events__title">{title}</h2>

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
