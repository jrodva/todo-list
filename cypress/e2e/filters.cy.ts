describe('Filters', () => {
  it('Clicks filters', () => {
    cy.visit('/')
    cy.get('body > app-root > div > app-header > div > app-filters-list > div > app-filter:nth-child(2) > button').click()
    cy.url().should('include', '/pending')
    cy.get('body > app-root > div > app-header > div > app-filters-list > div > app-filter:nth-child(3) > button').click()
    cy.url().should('include', '/completed')
    cy.get('body > app-root > div > app-header > div > app-filters-list > div > app-filter:nth-child(4) > button').click()
    cy.url().should('include', '/deleted')
    cy.get('body > app-root > div > app-header > div > app-filters-list > div > app-filter:nth-child(1) > button').click()
  })
})
