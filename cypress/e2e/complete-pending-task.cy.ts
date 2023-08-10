describe('Completion of a task', () => {
  it('Completes a pending task', () => {
    cy.visit('/')
    cy.get('body > app-root > div > app-header > div > app-filters-list > div > app-filter:nth-child(2) > button').click()
    cy.url().should('include', '/pending')
    cy.get('body > app-root > div > app-tasks-list > app-task:nth-child(2) > div > div.task-options > input[type=checkbox]')
      .check()
  })
})
