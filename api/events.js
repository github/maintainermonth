import fs from 'fs'

import dayjs from 'dayjs'

import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

import { getDataFromMD } from '../common/api'
import TYPES from '../components/event-type-chip/types'

dayjs.extend(utc)
dayjs.extend(timezone)

const TBD = 'TBD'
const ALL_DAY = 'All Day'

const isTBDValue = (value) =>
  !value || (typeof value === 'string' && value.toUpperCase() === 'TBD')

const isAllDayValue = (value) =>
  typeof value === 'string' &&
  value.toLowerCase().replace(/[\s\-_]/g, '') === 'allday'

export const getEvents = (year) => {
  const events_path = year ? `content/${year}/events` : 'content/events'
  if (!fs.existsSync(events_path)) return []
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
  const event = getDataFromMD(
    year ? `content/${year}/events/${slug}.md` : `content/events/${slug}.md`,
  )
  const link = year ? `/${year}/schedule/${slug}` : `/schedule/${slug}`

  return {
    slug,
    ...event,
    link,
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
    event.endDate,
  )

  return {
    formattedDate,
    ...event,
  }
}

// TODO: refactor
const formatEventDateTime = (
  startDate = dayjs.utc(),
  startTime,
  endTime,
  endDate,
) => {
  // Date
  const [month, day] = startDate.split('/')

  if (isNaN(month) || isNaN(day)) {
    throw new TypeError('date must be in mm/dd format (e.g. 06/12).')
  }

  const UTCDate = dayjs
    .utc()
    .date(day)
    .month(month - 1)

  const formattedDate = UTCDate.format('MMM D')

  let formattedEndDate = null

  if (endDate && endDate !== startDate) {
    const [endMonth, endDay] = endDate.split('/')

    if (isNaN(endMonth) || isNaN(endDay)) {
      throw new TypeError('date must be in mm/dd format (e.g. 06/12).')
    }

    const endUTCDate = dayjs
      .utc()
      .date(endDay)
      .month(endMonth - 1)

    formattedEndDate = endUTCDate.format('MMM D')
  }

  // All-day events
  if (isAllDayValue(startTime) || isAllDayValue(endTime)) {
    return {
      date: formattedDate,
      startTime: { utc: ALL_DAY, pt: ALL_DAY },
      endTime: { utc: ALL_DAY, pt: ALL_DAY },
      endDate: formattedEndDate,
      timeDisplay: 'all-day',
    }
  }

  // Start time
  let formattedStartTime = {
    utc: TBD,
    pt: TBD,
  }

  let hasSpecificStartTime = false

  if (!isTBDValue(startTime)) {
    const [startHour, startMinute] = startTime.split(':')

    const UTCStartTime = UTCDate.hour(startHour).minute(startMinute)

    if (!isNaN(UTCStartTime)) {
      const PTStartTime = UTCStartTime.tz('America/Los_Angeles')

      formattedStartTime = {
        utc: UTCStartTime.format('h:mm a'),
        pt: PTStartTime.format('h:mm a'),
      }
      hasSpecificStartTime = true
    }
  }

  // End time
  let formattedEndTime = {
    utc: TBD,
    pt: TBD,
  }

  let hasSpecificEndTime = false

  if (!isTBDValue(endTime)) {
    const [endHour, endMinute] = endTime.split(':')

    const UTCEndTime = UTCDate.hour(endHour).minute(endMinute)

    if (!isNaN(UTCEndTime)) {
      const PTEndTime = UTCEndTime.tz('America/Los_Angeles')

      formattedEndTime = {
        utc: UTCEndTime.format('h:mm a'),
        pt: PTEndTime.format('h:mm a'),
      }
      hasSpecificEndTime = true
    }
  }

  const timeDisplay =
    hasSpecificStartTime || hasSpecificEndTime ? 'specific' : 'tbd'

  return {
    date: formattedDate,
    startTime: formattedStartTime,
    endTime: formattedEndTime,
    endDate: formattedEndDate,
    timeDisplay,
  }
}
