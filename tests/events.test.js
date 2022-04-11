import fs from 'fs'

import { getEventBySlug, parseEvent } from '../api/events'

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
})
