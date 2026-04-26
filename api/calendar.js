import { createEvents } from 'ics'

const EVENT_YEAR = 2026

const isTBDValue = (value) =>
  !value || (typeof value === 'string' && value.toUpperCase() === 'TBD')

const isAllDayValue = (value) =>
  typeof value === 'string' &&
  value.toLowerCase().replace(/[\s\-_]/g, '') === 'allday'

function parseDateParts(dateStr) {
  const [month, day] = dateStr.split('/').map(Number)
  return { month, day }
}

function toICSEvent(event) {
  const { month: startMonth, day: startDay } = parseDateParts(event.date)

  const hasTime =
    !isTBDValue(event.UTCStartTime) && !isAllDayValue(event.UTCStartTime)

  const icsEvent = {
    title: event.title,
    description: event.metaDesc || '',
    location: event.location || '',
    calName: 'Maintainer Month 2026',
  }

  if (event.linkUrl) {
    icsEvent.url = event.linkUrl
  }

  if (hasTime) {
    const [startHour, startMinute] = event.UTCStartTime.split(':').map(Number)
    icsEvent.start = [EVENT_YEAR, startMonth, startDay, startHour, startMinute]
    icsEvent.startInputType = 'utc'

    if (!isTBDValue(event.UTCEndTime) && !isAllDayValue(event.UTCEndTime)) {
      const [endHour, endMinute] = event.UTCEndTime.split(':').map(Number)

      if (event.endDate && event.endDate !== event.date) {
        const { month: endMonth, day: endDay } = parseDateParts(event.endDate)
        icsEvent.end = [EVENT_YEAR, endMonth, endDay, endHour, endMinute]
      } else {
        icsEvent.end = [EVENT_YEAR, startMonth, startDay, endHour, endMinute]
      }
      icsEvent.startOutputType = 'utc'
      icsEvent.endInputType = 'utc'
      icsEvent.endOutputType = 'utc'
    } else {
      icsEvent.duration = { hours: 1 }
    }
  } else {
    // All-day or TBD: treat as all-day event
    icsEvent.start = [EVENT_YEAR, startMonth, startDay]
    icsEvent.startInputType = 'utc'

    if (event.endDate && event.endDate !== event.date) {
      const { month: endMonth, day: endDay } = parseDateParts(event.endDate)
      // ICS all-day end date is exclusive, so add one day
      const endDate = new Date(Date.UTC(EVENT_YEAR, endMonth - 1, endDay + 1))
      icsEvent.end = [
        endDate.getUTCFullYear(),
        endDate.getUTCMonth() + 1,
        endDate.getUTCDate(),
      ]
    } else {
      // Use Date math to handle month boundary rollover
      const endDate = new Date(Date.UTC(EVENT_YEAR, startMonth - 1, startDay + 1))
      icsEvent.end = [
        endDate.getUTCFullYear(),
        endDate.getUTCMonth() + 1,
        endDate.getUTCDate(),
      ]
    }
  }

  return icsEvent
}

export function generateICS(events) {
  const icsEvents = events.map(toICSEvent)
  const { error, value } = createEvents(icsEvents)

  if (error) {
    throw new Error(`Failed to generate ICS: ${error.message}`)
  }

  return value
}
