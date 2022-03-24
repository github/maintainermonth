import { useMemo } from 'react'

import dayjs from 'dayjs'

import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

const useDateTime = (date, startTime, endTime) => {
  const formattedTime = useMemo(() => {
    // Date
    const UTCDate = dayjs.utc(date)
    const formattedDate = UTCDate.format('MMM D')

    // Start time
    const [startHour, startMinute] = startTime.split(':')

    const UTCStartTime = UTCDate.hour(startHour).minute(startMinute)
    const PTStartTime = UTCStartTime.tz('America/Los_Angeles')

    const formattedUTCStartTime = UTCStartTime.format('H:mm a')
    const formattedPTStartTime = PTStartTime.format('H:mm a')

    // End time
    const [endHour, endMinute] = endTime.split(':')

    const UTCEndTime = UTCDate.hour(endHour).minute(endMinute)
    const PTEndTime = UTCStartTime.tz('America/Los_Angeles')

    const formattedUTCEndTime = UTCEndTime.format('H:mm a')
    const formattedPTEndTime = PTEndTime.format('H:mm a')

    return {
      date: formattedDate,
      startTime: {
        utc: formattedUTCStartTime,
        pt: formattedPTStartTime,
      },
      endTime: {
        utc: formattedUTCEndTime,
        pt: formattedPTEndTime,
      },
    }
  }, [date, endTime, startTime])

  return formattedTime
}

export default useDateTime
