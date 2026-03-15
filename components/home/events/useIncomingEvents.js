import { useMemo } from 'react'

const MAX_HOME_EVENTS = 3

const useIncomingEvents = (events) => {
  const incomingEvents = useMemo(() => {
    const sortedEvents = events.filter((event) => {
      const [eventMonth, eventDay] = event.date
        .split('/')
        .map((data) => parseInt(data))

      const currentDate = new Date()
      const currentMonth = currentDate.getUTCMonth() + 1
      const currentDay = currentDate.getUTCDate()

      const startIsUpcoming =
        eventMonth > currentMonth ||
        (eventMonth === currentMonth && eventDay >= currentDay)

      if (startIsUpcoming) return true

      if (event.endDate) {
        const [endMonth, endDay] = event.endDate
          .split('/')
          .map((data) => parseInt(data))

        const endIsUpcoming =
          endMonth > currentMonth ||
          (endMonth === currentMonth && endDay >= currentDay)

        if (endIsUpcoming) return true
      }

      return false
    })

    return sortedEvents.slice(0, MAX_HOME_EVENTS)
  }, [events])

  return incomingEvents
}

export default useIncomingEvents
