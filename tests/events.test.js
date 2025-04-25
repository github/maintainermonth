import fs from 'fs'

import { getEventBySlug, parseEvent } from '../api/events'
import testTypewindEvent from './testData/2025-05-02-typewind'
import testCookieCutterEvent from './testData/2025-05-02-Cookie-Cutter'

describe('Event files', () => {
  test('All event files have ".md" extension', () => {
    const eventFiles = fs.readdirSync('content/events')

    const areAllValid = eventFiles.every((fileName) => fileName.endsWith('.md'))

    expect(areAllValid).toBe(true)
  })

  test('All events have correct dates (or TBD)', () => {
    const eventFiles = fs.readdirSync('content/events')

    const events = eventFiles.map((fileName) => {
      const slug = fileName.replace('.md', '')
      const event = getEventBySlug(slug)
      return event
    })

    events.forEach((event) => {
      expect(() => parseEvent(event)).not.toThrowError()
    })
  })

  test('An event has an end date and does not throw an error', () => {
    const eventFiles = fs.readdirSync('content/events')

    const events = eventFiles.map((fileName) => {
      const slug = fileName.replace('.md', '')
      const event = getEventBySlug(slug)
      return event
    })

    events.forEach((event) => {
      expect(() => parseEvent(event)).not.toThrowError()
    })
  })

  test('An event returns an endDate', () => {
    const event = testCookieCutterEvent
    const parsedEvent = parseEvent(event)
    expect(parsedEvent).toEqual(expect.objectContaining({ endDate: '07/02' }))
  })

  test('An event has an invalid start time and does not throw an error', () => {
    const eventFiles = fs.readdirSync('content/events')

    const events = eventFiles.map((fileName) => {
      const slug = fileName.replace('.md', '')
      const event = getEventBySlug(slug)
      return event
    })

    events.forEach((event) => {
      expect(() => parseEvent(event)).not.toThrowError()
    })
  })

  test('An event with an invalid start time retunrs TBD', () => {
    const event = testTypewindEvent
    const parsedEvent = parseEvent(event)
    expect(parsedEvent).toEqual(
      expect.objectContaining({
        formattedDate: expect.objectContaining({
          startTime: {
            pt: 'TBD',
            utc: 'TBD',
          },
        }),
      }),
    )
  })
})
