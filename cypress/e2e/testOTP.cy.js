
describe('Practice Test Automation Website for Web UI & API', () => {
  it('Test OTP Page - Fail Attempt', () => {
    //Go to the website
    cy.visit('/');
    
    //Navigate to test Forgot password page
    cy.get('div a').contains(/OTP: One time password/i)
      .should('exist')
      .click();
    
    //Verify if redirected to correct page
    cy.get('h1').contains(/OTP Login page for Automation Testing Practice/i)

    //Check if the form for email
    cy.get('.card-body').should('be.visible')

    //Enter the wrong email format
    cy.get('#email').type('asdsad')

    cy.get('#btn-send-otp').click()

    //Verify that there is an error message
    cy.get('.invalid-feedback').should('be.visible')

  })

  it('Test OTP Page - Success', () => {
    //Go to the website
    cy.visit('/');
    
    //Navigate to test Forgot password page
    cy.get('div a').contains(/OTP: One time password/i)
      .should('exist')
      .click();
    
    //Verify if redirected to correct page
    cy.get('h1').contains(/OTP Login page for Automation Testing Practice/i)

    //Check if the form for email
    cy.get('.card-body').should('be.visible')

    //Enter the correct email 
    cy.get('#email').type('practice@expandtesting.com')

    //Click the button
    cy.get('#btn-send-otp').click()

    //Verify that the confirmation message is present
    cy.get('#otp-message').contains("We've sent an OTP").should('be.visible')

    //Verify and input the otp
    cy.get('#otp').should('exist')
      .type('214365')

    //Click the button for sending otp
    cy.get('#btn-send-verify').click()

    //Verify that you entered the correct page
    cy.get('#flash').contains('You logged into a secure area!').should('be.visible')

  })
})