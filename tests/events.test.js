import fs from 'fs'

import { getEventBySlug, parseEvent } from '../api/events'

describe('Event files', () => {
  test('All event files have ".md" extension', () => {
    const eventFiles = fs.readdirSync('content/events')

    const areAllValid = eventFiles.every((fileName) => fileName.endsWith('.md') || fileName === '.gitkeep');

    expect(areAllValid).toBe(true)
  })

  test('All events have correct dates (or TBD)', () => {
    const eventsDir = 'content/events'
    const eventFiles = fs.readdirSync(eventsDir)

    // Check if the directory is empty
    if (fs.readdirSync(eventsDir).length === 0) {
      console.log('Events directory \'s empty. Test is skipped.');
    } else {
      const events = eventFiles.map((fileName) => {
        const slug = fileName.replace('.md', '')
        const event = getEventBySlug(slug)
        return event
      })

      events.forEach((event) => {
        expect(() => parseEvent(event)).not.toThrowError()
      })
    }
  })
})
