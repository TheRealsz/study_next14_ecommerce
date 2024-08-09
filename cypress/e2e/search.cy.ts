// describe é uma caracterizaçao dos testes, e cada teste é feito dentro de um it
describe('add product to cart', () => {
    beforeEach(() => {
      cy.viewport("macbook-16")
    })
    it('should be able to search products', () => {
        
      cy.searchByQuery('Camiseta')

      cy.location('pathname').should('include', '/search')
      cy.location('search').should('include', 'q=Camiseta')

      cy.wait(1000)
      
      cy.get('a[href^="/product"]').should('have.length.greaterThan', 0)
    })
    it('should not be able to visit search page without a search query', () => {
        // O NextRedirect causa um throw error que é capturado pelo cypress, porém, como é apenas um redirecionamento, não é um erro que deva ser tratado pelo cypress
        cy.on('uncaught:exception', () => {
            return false
        })

        cy.visit('/search')
        cy.wait(1000)
        cy.location('pathname').should('equal', '/')
    })
  })