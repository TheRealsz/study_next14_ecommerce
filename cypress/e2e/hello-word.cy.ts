// describe é uma caracterizaçao dos testes, e cada teste é feito dentro de um it
describe('template spec', () => {
  it('passes', () => {
    // cy é uma variável global do cypress
    cy.visit('https://example.cypress.io')
  })
})