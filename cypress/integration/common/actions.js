import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I open {string} page', (uri) => {
  const baseUrl = 'http://localhost:3000'
  let path = ''
  switch (uri) {
    case 'home':
      path = '/'
      break
    case 'schedule':
      path = '/schedule'
      break
    default:
      path = uri
  }
  cy.visit(baseUrl + path)
})

When(`I click on {string}`, (path) => {
  cy.get(`a[href*="/${path}"]`).click()
})

When(`I click on {string} in section {string}`, (path, section) => {
  cy.get(`${section} a[href*="/${path}"]`).click()
})

Then(`I should see {string} in the url`, (text) => {
  cy.url().should('include', text)
})

Then(`I see {string} text in section {string}`, (text, location) => {
  cy.get(location).should('contain', text)
})
