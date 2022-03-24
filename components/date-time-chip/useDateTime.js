import { useMemo } from 'react'

import dayjs from 'dayjs'

import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

// TODO: refactor and move stuff to constants
const useDateTime = (date = dayjs.utc(), startTime, endTime) => {
  const formattedTime = useMemo(() => {
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
  }, [date, endTime, startTime])

  return formattedTime
}

export default useDateTime
