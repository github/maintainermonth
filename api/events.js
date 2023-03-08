import fs from 'fs'

import dayjs from 'dayjs'

import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

import { getDataFromMD } from '../common/api'
import TYPES from '../components/event-type-chip/types'

dayjs.extend(utc)
dayjs.extend(timezone)

const TBD = 'TBD'

export const getEvents = (year) => {
  const events_path = year ? `content/${year}/events` : 'content/events';
  const eventFiles = fs.readdirSync(events_path)

  const events = eventFiles
    .map((fileName) => {
      const slug = fileName.replace('.md', '')
      const event = getEventBySlug(slug, year)

      return event
    })
    .sort((event1, event2) => new Date(event1.date) - new Date(event2.date))

  return events
}

export const getEventBySlug = (slug, year) => {
  const event = getDataFromMD(year?`content/${year}/events/${slug}.md`:`content/events/${slug}.md`)
  const link = year? `/${year}/schedule/${slug}` : `/schedule/${slug}`;

  return {
    slug,
    ...event,
    link
  }
}

export const parseEvents = (events) => events.map(parseEvent)

export const parseEvent = (event) => {
  if (!event.title) {
    throw new TypeError('Event must have a title.')
  }

  if (Object.keys(TYPES).indexOf(event.type) === -1) {
    throw new TypeError(
      `Event must be one of the following types: ${Object.keys(TYPES).join(
        ', ',
      )}`,
    )
  }

  const formattedDate = formatEventDateTime(
    event.date,
    event.UTCStartTime,
    event.UTCEndTime,
  )

  return {
    formattedDate,
    ...event,
  }
}

// TODO: refactor
const formatEventDateTime = (date = dayjs.utc(), startTime, endTime) => {
  // Date
  const [month, day] = date.split('/')

  if (isNaN(month) || isNaN(day)) {
    throw new TypeError('date must be in mm/dd format (e.g. 06/12).')
  }

  const UTCDate = dayjs
    .utc()
    .date(day)
    .month(month - 1)
  const formattedDate = UTCDate.format('MMM D')

  // Start time
  let formattedStartTime = {}

  if (startTime && startTime !== TBD) {
    const [startHour, startMinute] = startTime.split(':')

    const UTCStartTime = UTCDate.hour(startHour).minute(startMinute)

    if (isNaN(UTCStartTime)) {
      throw new TypeError(
        'UTCStartTime must be in hh:mm format (e.g. 12:30) or be "TDB".',
      )
    }

    const PTStartTime = UTCStartTime.tz('America/Los_Angeles')

    const formattedUTCStartTime = UTCStartTime.format('HH:mm a')
    const formattedPTStartTime = PTStartTime.format('HH:mm a')

    formattedStartTime = {
      utc: formattedUTCStartTime,
      pt: formattedPTStartTime,
    }
  }

  // End time
  let formattedEndTime = {}

  if (endTime && endTime !== TBD) {
    const [endHour, endMinute] = endTime.split(':')

    const UTCEndTime = UTCDate.hour(endHour).minute(endMinute)

    if (isNaN(UTCEndTime)) {
      throw new TypeError(
        'UTCEndTime must be in hh:mm format (e.g. 12:30) or be "TDB".',
      )
    }

    const PTEndTime = UTCEndTime.tz('America/Los_Angeles')

    const formattedUTCEndTime = UTCEndTime.format('HH:mm a')
    const formattedPTEndTime = PTEndTime.format('HH:mm a')

    formattedEndTime = {
      utc: formattedUTCEndTime,
      pt: formattedPTEndTime,
    }
  }

  return {
    date: formattedDate,
    startTime: formattedStartTime,
    endTime: formattedEndTime,
  }
}
