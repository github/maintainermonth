import { fireEvent, render, screen } from '@testing-library/react'

import EventsList from '../components/events-list/EventsList'

const baseEvent = {
  formattedDate: {
    date: 'May 14',
    startTime: { utc: '7:00 pm', pt: '12:00 pm' },
    endTime: { utc: '8:00 pm', pt: '1:00 pm' },
    timeDisplay: 'specific',
  },
  language: 'English',
  location: 'Virtual',
  userName: 'Maintainer Month',
  userLink: 'https://github.com/github/maintainermonth',
  link: '/schedule/test-event',
  linkUrl: 'https://github.com/github/maintainermonth',
  metaDesc: 'A test event.',
}

const events = [
  {
    ...baseEvent,
    slug: 'meetup-event',
    title: 'Maintainer meetup',
    type: 'meetup',
  },
  {
    ...baseEvent,
    slug: 'workshop-event',
    title: 'Maintainer workshop',
    type: 'workshop',
  },
]

describe('EventsList filters', () => {
  test('filters schedule cards by event type and restores all events', () => {
    render(<EventsList events={events} />)

    expect(screen.getByRole('button', { name: /All event types 2/i })).toBeTruthy()
    expect(screen.getByRole('button', { name: /Meetup 1/i })).toBeTruthy()
    expect(screen.getByRole('button', { name: /Workshop 1/i })).toBeTruthy()
    expect(screen.getByText('Maintainer meetup')).toBeTruthy()
    expect(screen.getByText('Maintainer workshop')).toBeTruthy()

    fireEvent.click(screen.getByRole('button', { name: /Meetup 1/i }))

    expect(screen.getByText('Maintainer meetup')).toBeTruthy()
    expect(screen.queryByText('Maintainer workshop')).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: /Workshop 1/i }))

    expect(screen.queryByText('Maintainer meetup')).toBeNull()
    expect(screen.getByText('Maintainer workshop')).toBeTruthy()

    fireEvent.click(screen.getByRole('button', { name: /All event types 2/i }))

    expect(screen.getByText('Maintainer meetup')).toBeTruthy()
    expect(screen.getByText('Maintainer workshop')).toBeTruthy()
  })
})
