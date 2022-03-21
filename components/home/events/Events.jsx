import Link from 'next/link'

import * as ROUTES from '../../../common/routes'

const Events = ({ title, ctaTitle, ctaButtonText, todayEvents }) => {
  return (
    <section className="events">
      <h2>{title}</h2>

      {todayEvents.map((event) => (
        <div key={event.slug}>
          <Link href={ROUTES.EVENT.linkTo({ slug: event.slug })}>
            {event.title}
          </Link>
        </div>
      ))}

      <p>{ctaTitle}</p>
      <Link href={ROUTES.SCHEDULE.path}>{ctaButtonText}</Link>
    </section>
  )
}

export default Events
