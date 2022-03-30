import fs from 'fs'

import dayjs from 'dayjs'

import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

import { getDataFromMD } from '../common/api'

dayjs.extend(utc)
dayjs.extend(timezone)

export const getEvents = () => {
  const eventFiles = fs.readdirSync('content/events')

  const events = eventFiles.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const event = getEventBySlug(slug)

    return event
  })

  return events
}

export const getTodayEvents = () => {
  const events = getEvents()

  // TODO: filter by current day

  return events
}

export const getEventBySlug = (slug) => {
  const event = getDataFromMD(`content/events/${slug}.md`)

  const parsedEvent = parseEvent(event)

  return {
    slug,
    ...parsedEvent,
  }
}

const parseEvent = (event) => {
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

const formatEventDateTime = (date = dayjs.utc(), startTime, endTime) => {
  // Date
  const UTCDate = dayjs.utc(date)
  const formattedDate = UTCDate.format('MMM D')

  // Start time
  let formattedStartTime = {}

  if (startTime) {
    const [startHour, startMinute] = startTime.split(':')

    const UTCStartTime = UTCDate.hour(startHour).minute(startMinute)
    const PTStartTime = UTCStartTime.tz('America/Los_Angeles')

    const formattedUTCStartTime = UTCStartTime.format(
      UTCStartTime.minute() !== 0 ? 'H:mm a' : 'H a',
    )
    const formattedPTStartTime = PTStartTime.format(
      UTCStartTime.minute() !== 0 ? 'H:mm a' : 'H a',
    )

    formattedStartTime = {
      utc: formattedUTCStartTime,
      pt: formattedPTStartTime,
    }
  }

  // End time
  let formattedEndTime = {}

  if (endTime) {
    const [endHour, endMinute] = endTime.split(':')

    const UTCEndTime = UTCDate.hour(endHour).minute(endMinute)
    const PTEndTime = UTCEndTime.tz('America/Los_Angeles')

    const formattedUTCEndTime = UTCEndTime.format(
      UTCEndTime.minute() !== 0 ? 'H:mm a' : 'H a',
    )
    const formattedPTEndTime = PTEndTime.format(
      UTCEndTime.minute() !== 0 ? 'H:mm a' : 'H a',
    )

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
