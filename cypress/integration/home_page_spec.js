/// <reference types="Cypress" />

describe('FrontEnd', function() {
  it('successfully loads', function() {
    cy.visit('/')
  })
})

describe('Express Server', function() {
  it('successfully loads', function() {
    cy.request('http://localhost:3001')
  })
})

describe('renders the list of items', () => {
  it('renders the list of items', () => {
    cy.visit('/')
    cy.get(".container")
  })
})

describe('renders each item', () => {
  it ('renders each item', () => {
    cy.visit('/')
    cy.get('.card')
  })
})
