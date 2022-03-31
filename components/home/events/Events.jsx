import EventDetail from '../../event-detail/EventDetail'

const Events = ({ title, todayEvents }) => {
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
    </section>
  )
}

export default Events
