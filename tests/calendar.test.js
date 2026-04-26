jest.mock('ics', () => ({
  createEvents: jest.fn(() => ({ value: 'BEGIN:VCALENDAR\nEND:VCALENDAR' })),
}))

const { createEvents } = require('ics')
const { generateICS } = require('../api/calendar')

const baseEvent = {
  title: 'Maintainer event',
  metaDesc: 'A Maintainer Month event.',
  date: '05/28',
  UTCStartTime: '15:00',
  UTCEndTime: '15:30',
  location: 'Virtual',
}

describe('calendar ICS generation', () => {
  beforeEach(() => {
    createEvents.mockClear()
  })

  test('omits URL when an event does not have a link URL', () => {
    generateICS([baseEvent])

    const icsEvent = createEvents.mock.calls[0][0][0]
    expect(icsEvent.title).toBe('Maintainer event')
    expect(icsEvent).not.toHaveProperty('url')
  })

  test('includes URL when an event has a link URL', () => {
    generateICS([
      {
        ...baseEvent,
        linkUrl: 'https://github.com/github/maintainermonth',
      },
    ])

    const icsEvent = createEvents.mock.calls[0][0][0]
    expect(icsEvent.url).toBe('https://github.com/github/maintainermonth')
  })
})
