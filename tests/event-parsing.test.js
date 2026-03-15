import { parseEvent } from '../api/events'

describe('Event parsing - TBD and All Day times', () => {
  const baseEvent = {
    slug: 'test-event',
    title: 'Test Event',
    date: '05/15',
    type: 'talk',
    content: 'Test content',
    link: '/schedule/test-event',
  }

  test('Event with no times defaults to TBD', () => {
    const parsed = parseEvent({ ...baseEvent })
    expect(parsed.formattedDate.startTime.utc).toBe('TBD')
    expect(parsed.formattedDate.startTime.pt).toBe('TBD')
  })

  test('Event with explicit TBD start time', () => {
    const parsed = parseEvent({ ...baseEvent, UTCStartTime: 'TBD' })
    expect(parsed.formattedDate.startTime.utc).toBe('TBD')
  })

  test('Event with all-day start time', () => {
    const parsed = parseEvent({ ...baseEvent, UTCStartTime: 'all-day' })
    expect(parsed.formattedDate.timeDisplay).toBe('all-day')
  })

  test('Event with valid times parses correctly', () => {
    const parsed = parseEvent({
      ...baseEvent,
      UTCStartTime: '14:00',
      UTCEndTime: '15:00',
    })
    expect(parsed.formattedDate.startTime.utc).not.toBe('TBD')
    expect(parsed.formattedDate.endTime.utc).not.toBe('TBD')
  })

  test('Event with endDate shows formatted end date', () => {
    const parsed = parseEvent({
      ...baseEvent,
      endDate: '05/18',
      UTCStartTime: '14:00',
      UTCEndTime: '15:00',
    })
    expect(parsed.formattedDate.endDate).toBeTruthy()
  })

  test('Event without title throws', () => {
    expect(() => parseEvent({ ...baseEvent, title: undefined })).toThrow()
  })

  test('Event with invalid type throws', () => {
    expect(() =>
      parseEvent({ ...baseEvent, type: 'invalid-type' }),
    ).toThrow()
  })

  test('Event with invalid date format throws', () => {
    expect(() =>
      parseEvent({ ...baseEvent, date: 'May 15' }),
    ).toThrow()
  })
})
