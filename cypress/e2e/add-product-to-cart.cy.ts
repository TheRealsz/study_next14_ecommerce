// describe é uma caracterizaçao dos testes, e cada teste é feito dentro de um it
describe('add product to cart', () => {
  beforeEach(() => {
    // cy.viewport é uma função do cypress que define o tamanho da tela
    cy.viewport("macbook-16")
    // cy é uma variável global do cypress
    cy.visit('/')
  })

  it('should be able to navigate to the product page and add to cart', () => {

    // cy.get é uma função do cypress que busca um elemento na tela com base no seletor passado
    // cy.get('a[href^="/product"]').first().click() busca o primeiro elemento que é um link e que começa com "/product" e clica nele
    cy.get('a[href^="/product"]').first().click()

    // cy.url() pega a url atual do navegador
    // cy.url().should('include', '/product') verifica se a url atual contém "/product" para garantir que a navegação foi feita corretamente
    cy.url().should('include', '/product')

    cy.get('button').contains('Adicionar ao carrinho').click()

    cy.get("span").contains("Cart (1)").should("exist")
  })
  it('should not be able duplicated product on cart', () => {

    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')

    // Clicando duas vezes no botão "Adicionar ao carrinho" para adicionar o mesmo produto duas vezes
    cy.get('button').contains('Adicionar ao carrinho').click()
    cy.get('button').contains('Adicionar ao carrinho').click()

    // Verificando se o carrinho contém 1 item e não 2
    cy.get("span").contains("Cart (1)").should("exist")
  })
  it('should be able to search a product and add it to the cart', () => {

    cy.get('input[name="q"]').type("Camiseta").type("{enter}")
    
    cy.wait(1000)
    
    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')

    cy.get('button').contains('Adicionar ao carrinho').click()

    cy.get("span").contains("Cart (1)").should("exist")
  })
})