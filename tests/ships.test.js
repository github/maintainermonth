import shipsJSON from '../content/ships/ships.json'

const { ships } = shipsJSON

describe('Ships', () => {
  test('Ships must have a title', () => {
    const areAllValid = ships.every((ship) => ship.title)
    expect(areAllValid).toBe(true)
  })

  test('Ships must have a URL', () => {
    const areAllValid = ships.every((ship) => ship.url)
    expect(areAllValid).toBe(true)
  })

  test('Ships must have a date in YYYY-MM-DD format', () => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/
    const areAllValid = ships.every((ship) => dateRegex.test(ship.date))
    expect(areAllValid).toBe(true)
  })

  test('Ships must have a description', () => {
    const areAllValid = ships.every((ship) => ship.description)
    expect(areAllValid).toBe(true)
  })

  test('Ships must have a category', () => {
    const areAllValid = ships.every((ship) => ship.category)
    expect(areAllValid).toBe(true)
  })

  test('Ships descriptions no longer than 200 characters', () => {
    const areAllValid = ships.every(
      (ship) => ship.description.length <= 200,
    )
    expect(areAllValid).toBe(true)
  })

  test('Ships URLs must start with https://', () => {
    const areAllValid = ships.every((ship) =>
      ship.url.startsWith('https://'),
    )
    expect(areAllValid).toBe(true)
  })
})
