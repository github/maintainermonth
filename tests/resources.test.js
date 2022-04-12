import resourcesJSON from '../content/library/resources.json'

const { resources } = resourcesJSON

describe('Resources', () => {
  test('Resources must have a title', () => {
    const areAllValid = resources.every((resource) => resource.title)
    expect(areAllValid).toBe(true)
  })

  test('Resources must have an author', () => {
    const areAllValid = resources.every((resource) => resource.author)
    expect(areAllValid).toBe(true)
  })

  test('Resources description no longer than 200 characters', () => {
    const areAllValid = resources.every(
      (resource) => resource.description.length <= 200,
    )
    expect(areAllValid).toBe(true)
  })

  test('Resources must have a link', () => {
    const areAllValid = resources.every((resource) => resource.link)
    expect(areAllValid).toBe(true)
  })

  test('Resources must have a type', () => {
    const areAllValid = resources.every((resource) => resource.type)
    expect(areAllValid).toBe(true)
  })

  test('Resources must have topics', () => {
    const areAllValid = resources.every((resource) => resource.topics)
    expect(areAllValid).toBe(true)
  })
})
