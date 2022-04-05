import EventDetail from '../../event-detail/EventDetail'
import Connection from '../connection/Connection'

const Events = ({
  title,
  todayEvents,
  connectionTitle,
  connectionButtonText,
}) => {
  return (
    <section className="events">
      <div className="events__content">
        <h2 className="events__title">{title}</h2>

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
      <Connection title={connectionTitle} buttonText={connectionButtonText} />
    </section>
  )
}

export default Events
