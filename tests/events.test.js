import fs from 'fs'

import { getEventBySlug, parseEvent } from '../api/events'
import testTypewindEvent from './testData/2025-05-02-typewind'
import testCookieCutterEvent from './testData/2025-05-02-Cookie-Cutter'

const EVENTS_DIR = 'content/events'
const hasEventsDir = fs.existsSync(EVENTS_DIR)

describe('Event files', () => {
  test('All event files have ".md" extension', () => {
    if (!hasEventsDir) return
    const eventFiles = fs.readdirSync(EVENTS_DIR)

    const areAllValid = eventFiles.every((fileName) => fileName.endsWith('.md'))

    expect(areAllValid).toBe(true)
  })

  test('All events have correct dates (or TBD)', () => {
    if (!hasEventsDir) return
    const eventFiles = fs.readdirSync(EVENTS_DIR)

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
    if (!hasEventsDir) return
    const eventFiles = fs.readdirSync(EVENTS_DIR)

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
    if (!hasEventsDir) return
    const eventFiles = fs.readdirSync(EVENTS_DIR)

    const events = eventFiles.map((fileName) => {
      const slug = fileName.replace('.md', '')
      const event = getEventBySlug(slug)
      return event
    })

    events.forEach((event) => {
      expect(() => parseEvent(event)).not.toThrowError()
    })
  })

  test('An event with an invalid start time returns TBD', () => {
    const event = testTypewindEvent
    const parsedEvent = parseEvent(event)
    expect(parsedEvent).toEqual(
      expect.objectContaining({
        formattedDate: expect.objectContaining({
          startTime: {
            pt: 'TBD',
            utc: 'TBD',
          },
          timeDisplay: 'specific',
        }),
      }),
    )
  })
})
