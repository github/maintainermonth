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

const getUTCMonthDay = (month, day) =>
  dayjs
    .utc()
    .date(1)
    .month(month - 1)
    .date(day)
    .hour(0)
    .minute(0)
    .second(0)
    .millisecond(0)

const formatTime = (date, hour, minute) => {
  const UTCTime = date.hour(hour).minute(minute)

  if (isNaN(UTCTime)) return null

  const PTTime = UTCTime.tz('America/Los_Angeles')

  return {
    utc: UTCTime.format('h:mm a'),
    pt: PTTime.format('h:mm a'),
    utcDate: UTCTime.format('MMM D'),
    ptDate: PTTime.format('MMM D'),
  }
}

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

  const UTCDate = getUTCMonthDay(month, day)
  const formattedDate = UTCDate.format('MMM D')

  let formattedEndDate = null
  let endUTCDate = UTCDate

  if (endDate && endDate !== startDate) {
    const [endMonth, endDay] = endDate.split('/')

    if (isNaN(endMonth) || isNaN(endDay)) {
      throw new TypeError('date must be in mm/dd format (e.g. 06/12).')
    }

    endUTCDate = getUTCMonthDay(endMonth, endDay)
    formattedEndDate = endUTCDate.format('MMM D')
  }

  // All-day events
  if (isAllDayValue(startTime) || isAllDayValue(endTime)) {
    return {
      date: formattedDate,
      startTime: {
        utc: ALL_DAY,
        pt: ALL_DAY,
        utcDate: formattedDate,
        ptDate: formattedDate,
      },
      endTime: {
        utc: ALL_DAY,
        pt: ALL_DAY,
        utcDate: formattedEndDate || formattedDate,
        ptDate: formattedEndDate || formattedDate,
      },
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
    const parsedStartTime = formatTime(UTCDate, startHour, startMinute)

    if (parsedStartTime) {
      formattedStartTime = parsedStartTime
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
    const parsedEndTime = formatTime(endUTCDate, endHour, endMinute)

    if (parsedEndTime) {
      formattedEndTime = parsedEndTime
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
