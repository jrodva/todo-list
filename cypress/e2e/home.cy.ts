describe('Home', () => {
  it('Visits home', () => {
    cy.visit('/')
    cy.contains('TODO LIST')
    cy.contains('All')
    cy.contains('Pending')
    cy.contains('Completed')
    cy.contains('Deleted')
    cy.contains('Add a new task')
  })
})
