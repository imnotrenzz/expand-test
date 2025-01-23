const { faker } = require('@faker-js/faker');
const randomNumber = faker.number.int({ min: 1, max: 100 });
describe('Practice Test Automation Website for Web UI & API', () => {
  it('Test Register Page - Fail Attempt', () => {
    //Go to the website
    cy.visit('/');
    
    //Navigate to test register page
    cy.get('div a').contains(/Test register page/i)
      .should('exist')
      .click();
    
    //Verify if redirected to correct page
    cy.get('h1').contains(/Test register page/i)

    //Check if form for registering is available
    cy.get('.card-body').should('exist')

    //Type an unmatching password
    cy.get('#username').type('testusername')
    cy.get('#password').type('123pass')
    cy.get('#confirmPassword').type('pass123')

    //Click register
    cy.get('#login > .btn').click()

    //Verify that there is an error message
    cy.get('#flash').contains('Passwords do not match.').should('be.visible')
  })

  it('Test Register Page - Same Account Attempt', () => {
    //Go to the website
    cy.visit('/');
    
    //Navigate to test login page
    cy.get('div a').contains(/Test register page/i)
      .should('exist')
      .click();
    
    //Verify if redirected to correct page
    cy.get('h1').contains(/Test register page/i)

    //Check if form for registering is available
    cy.get('.card-body').should('exist')

    //Type an unmatching password
    cy.get('#username').type('testusername')
    cy.get('#password').type('123pass')
    cy.get('#confirmPassword').type('123pass')

    //Click register
    cy.get('#login > .btn').click()

    //Verify that there is an error message
    cy.get('#flash').contains('An error occurred during registration. Please try again.').should('be.visible')
  })

  it('Test Register Page - Successful Attempt', () => {
    //Go to the website
    cy.visit('/');
    
    //Navigate to test login page
    cy.get('div a').contains(/Test register page/i)
      .should('exist')
      .click();
    
    //Verify if redirected to correct page
    cy.get('h1').contains(/Test register page/i)

    //Check if form for registering is available
    cy.get('.card-body').should('exist')

    //Type an unmatching password
    cy.get('#username').type(`testusername${randomNumber}`)
    cy.get('#password').type('pass1234')
    cy.get('#confirmPassword').type('pass1234')

    //Click register
    cy.get('#login > .btn').click()
    cy.get('#flash').contains('Successfully registered, you can log in now.').should('be.visible')
  })
})