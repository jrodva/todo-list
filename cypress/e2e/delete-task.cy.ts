describe('Deletion of a pending task', () => {
  it('Deletes a pending task', () => {
    cy.visit('/')
    cy.get('body > app-root > div > app-header > div > app-filters-list > div > app-filter:nth-child(2) > button').click()
    cy.url().should('include', '/pending')
    cy.get('body > app-root > div > app-tasks-list > app-task:nth-child(2) > div').trigger('onmouseover')
    cy.get('body > app-root > div > app-tasks-list > app-task:nth-child(2) > div').trigger('mouseenter')
    cy.get('body > app-root > div > app-tasks-list > app-task:nth-child(2) > div > div:nth-child(2) > button:nth-child(2)')
      .invoke('show')
      .click()
    cy.visit('/')
  })
})
