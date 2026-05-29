import SectionDivider from '../../section-divider/SectionDivider'
import Connection from '../connection/Connection'

const Events = ({ title, list, connectionTitle, connectionButtonText }) => {
  return (
    <section className="events">
      <div className="events__content">
        <SectionDivider title={title} />
      </div>
      <Connection title={connectionTitle} buttonText={connectionButtonText} />
    </section>
  )
}

export default Events
