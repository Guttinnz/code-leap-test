class SignupPage {

    go() {
    cy.visit('https://code-leap-network.vercel.app/')
    cy.get('h1').should('be.visible')
    cy.get('h1').should('have.text', 'Welcome to CodeLeap network!')
    }

    login() {
    cy.get('input').click().type('Tester')
    cy.contains('ENTER').click()
    }

}

export default new SignupPage; // exporta já pronto para ser utilizado graças ao new