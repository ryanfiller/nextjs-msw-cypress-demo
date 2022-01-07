describe('a test', () => {
  it('goes to the homepage', () => {
    cy.viewport(900, 1200)
    cy.visit('/')
    expect(true).to.equal(true)
  })
})
