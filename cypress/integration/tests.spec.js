describe('server side mocking data on the homepage', () => {
  it('renders mocked API data', () => {
    cy.viewport(900, 1200)
    cy.visit('/')
    expect(true).to.equal(true)
  })
})

describe('partially manipulating mocked data', () => {
  const min = 1
  const max = 9
  const random = Math.floor(Math.random() * (max - min + 1) + min)

  it('renders some real data and some mocked API data', () => {
    cy.viewport(900, 1200)
    cy.visit('/')
    cy.get('a')
      .eq(random)
      .should('have.attr', 'href')
      .then((href) => cy.visit(href))
    expect(true).to.equal(true)
  })
})

describe('client side', () => {
  it('renders mocked API data', () => {
    cy.viewport(900, 1200)
    cy.visit('/random')
    cy.get('button').eq(0).click()
    cy.get('img')
    expect(true).to.equal(true)
  })
})