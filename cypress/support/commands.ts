/// <reference types="cypress" />


declare namespace Cypress {
    interface Chainable {
        // Como nao retorna nada, o tipo é Chainable<void>
        searchByQuery(query: string): Chainable<void>
    }
}

Cypress.Commands.add('searchByQuery', (query: string) => {
    cy.visit('/')
    cy.get('input[name="q"]').type(query).type("{enter}")
})