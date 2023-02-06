describe('Code Leap Network Page Load', () => {
  it('should load the main page', () => {
    cy.visit('https://code-leap-network.vercel.app/')
    cy.get('h1').should('be.visible')
    cy.get('h1').should('have.text', 'Welcome to CodeLeap network!')
  })
  
  it('should login to feed page', () => {
    cy.visit('https://code-leap-network.vercel.app/')
    cy.get('input').click()
    cy.contains('ENTER').click({force: true})
    cy.get('h1').should('be.visible')
    cy.get('h1').should('have.text', 'Welcome to CodeLeap network!')
  })

  it('should login to feed page', () => {
    cy.visit('https://code-leap-network.vercel.app/')
    cy.get('h1').should('be.visible')
    cy.get('h1').should('have.text', 'Welcome to CodeLeap network!')
    cy.get('input').click().type('Tester')
    cy.contains('ENTER').click()
  })

})