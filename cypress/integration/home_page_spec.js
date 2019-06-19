/// <reference types="Cypress" />

describe('FrontEnd', function() {
  beforeEach(() => {
    cy.visit('/')
  })
  it('successfully loads', function() {
    cy.visit('/')
  })
  it('renders the list of items', () => {
    cy.visit('/')
    cy.get(".container")
  })
  it ('renders each item', () => {
    cy.visit('/')
    cy.get('.card')
  })
  it('renders when a big image is clicked on', () => {
    cy.visit('/')
    cy.get('.carousel')
  })
})

describe('Express Server', function() {
  it('successfully starts', function() {
    cy.request('http://localhost:3001')
  })
})




