
describe('Practice Test Automation Website for Web UI & API', () => {
  it('Test Login Page - Fail Attempt', () => {
    //Go to the website
    cy.visit('/');
    
    //Navigate to test login page
    cy.get('div a').contains(/Test login page/i)
      .should('exist')
      .click();
    
    //Verify if redirected to correct page
    cy.get('h1').contains(/Test login page/i)

    //Try logging in with invalid credentials
    cy.get('.card-body').should('exist').and('be.visible')

    cy.get('#username').type('ABCDE')
    cy.get('#password').type('erfgh')
    
    cy.get('#login > .btn').click()
    cy.wait(2000)
    cy.get('#flash').contains('Your password is invalid!').should('exist')
  })

  it('Test Login Page - Successful Attempt', () => {
     //Go to the website
     cy.visit('/');
    
     //Navigate to test login page
     cy.get('div a').contains(/Test login page/i)
       .should('exist')
       .click();
     
     //Verify if redirected to correct page
     cy.get('h1').contains(/Test login page/i)
 
     //Try logging in with invalid credentials
     cy.get('.card-body').should('exist').and('be.visible')
 
     cy.get('#username').type('practice')
     cy.get('#password').type('SuperSecretPassword!')
     
     cy.get('#login > .btn').click()

     cy.get('#flash').contains('You logged into a secure area').should('be.visible')

     cy.get('h1').contains('Secure Area page for Automation').should('exist')

     //Logout
     cy.get('.button').click()

     cy.get('#flash').contains("You logged out of the secure area!").should('be.visible')
  })
})