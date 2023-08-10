describe('Creation of a new task', () => {
  it('Creates a new task', () => {
    cy.visit('/')
    cy.get('body > app-root > div > app-tasks-list > form > input.task-input')
      .type('Bring cats to the veterinary tomorrow')
    cy.get('body > app-root > div > app-tasks-list > form > input.submit-button').click()
    cy.contains('Bring cats to the veterinary tomorrow')
  })
})
