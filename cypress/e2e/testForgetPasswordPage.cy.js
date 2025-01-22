
describe('Practice Test Automation Website for Web UI & API', () => {
  it('Test Forget Password Page - Fail Attempt typing without the "@" in email', () => {
    //Go to the website
    cy.visit('/');
    
    //Navigate to test Forgot password page
    cy.get('div a').contains(/Forgot password Form/i)
      .should('exist')
      .click();
    
    //Verify if redirected to correct page
    cy.get('h1').contains(/Dummy Forgot Password/i)

    //Check if the form for password changing is visible
    cy.get('.card-body').should('be.visible')

    //Input a invalid email
    cy.get('#email').type("rtest")

    //Click the button
    cy.get('#forgot_password > .btn').click()

    //Check the error message
    cy.get('.mb-3 > .ms-1').should('be.visible')

  })

  it('Test Forget Password Page - Fail Attempt typing without the "@" but not correct email', () => {
    //Go to the website
    cy.visit('/');
    
    //Navigate to test Forgot password page
    cy.get('div a').contains(/Forgot password Form/i)
      .should('exist')
      .click();
    
    //Verify if redirected to correct page
    cy.get('h1').contains(/Dummy Forgot Password/i)

    //Check if the form for password changing is visible
    cy.get('.card-body').should('be.visible')

    //Input a invalid email
    cy.get('#email').type("rtest@re")

    //Click the button
    cy.get('#forgot_password > .btn').click()

    //Check the error message
    cy.get('#flash').contains('Your email is invalid!').should('be.visible')
  })

  it('Test Forget Password Page - Success Attempt', () => {
    //Go to the website
    cy.visit('/');
    
    //Navigate to test Forgot password page
    cy.get('div a').contains(/Forgot password Form/i)
      .should('exist')
      .click();
    
    //Verify if redirected to correct page
    cy.get('h1').contains(/Dummy Forgot Password/i)

    //Check if the form for password changing is visible
    cy.get('.card-body').should('be.visible')

    //Input a valid email
    cy.get('#email').type("rtest@gmail.com")

    //Click the button
    cy.get('#forgot_password > .btn').click()

  })
})