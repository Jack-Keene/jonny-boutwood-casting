describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('opens the index page', () => {
    cy.get('h1').contains('Great coffee with a conscience')
  })

  it('navigates to the blog page', () => {
    cy.get('a[href="/post"]').eq(0).click();
    cy.url().should("include", "/post")
    cy.get('h1').contains(/Latest Stories/i)
  })
})