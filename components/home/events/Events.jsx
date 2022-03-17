import Link from 'next/link'

import { getRelativeURL } from '../../../common/routes'

const Events = ({ title, ctaTitle, ctaButtonText, todayEvents }) => {
  return (
    <section className="events">
      <h2>{title}</h2>

      {todayEvents.map((event) => (
        <div key={event.slug}>
          <Link href={getRelativeURL(`/events/${event.slug}`)}>
            {event.title}
          </Link>
        </div>
      ))}

      <p>{ctaTitle}</p>
      <Link href={getRelativeURL('/schedule')}>{ctaButtonText}</Link>
    </section>
  )
}

export default Events
