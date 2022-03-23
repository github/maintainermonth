import md from 'markdown-it'
import clsx from 'clsx'

import IconVideo from '../../public/icons/video'

// TODO: title heading for SEO (titleComponent?)

const EventDetail = ({ event, reverseColumns }) => {
  const classes = clsx('event-detail', {
    'reverse-columns': reverseColumns,
  })

  return (
    <article className={classes}>
      <div className="event-detail__info">
        <p>{event.type}</p>
        <p>{event.date}</p>
        <p>{event.UTCEndTime}</p>
        <p>{event.UTCStartTime}</p>
        <p className="event-detail__title">{event.title}</p>
        <div
          className="event-detail__text"
          dangerouslySetInnerHTML={{
            __html: md().render(event.content),
          }}
        />
      </div>
      <div className="event-detail__link-wrapper">
        <a className="event-detail__link" href={event.linkUrl}>
          {event.linkTitle} <IconVideo />
        </a>
      </div>
    </article>
  )
}

export default EventDetail
