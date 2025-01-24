
describe('Practice Test Automation Website for Web UI & API', () => {
  it('Test Radio Button', () => {
    //Go to the website
    cy.visit('/');
    
    //Navigate to test Browser Info page
    cy.get('div a').contains(/Radio Buttons/i)
      .should('exist')
      .click();
    
    //Verify if redirected to correct page
    cy.get('h1').contains(/Radio Buttons page for Automation Testing Practice/i)

    //Verify that there is a card for selecting color and sports
    cy.get(':nth-child(1) > .card').should('exist').and('be.visible')
    cy.get(':nth-child(2) > .card').should('exist').and('be.visible')

    //Since the example has an ID for the radio button we'll use it
    cy.get('#red').check()
    
    //Check that the other options are not checked
    cy.get(':nth-child(1) > .card input[type="radio"]').each(($radio) => {
      if ($radio.val() === 'red') {
        cy.wrap($radio).should('be.checked');
      } else {
        cy.wrap($radio).should('not.be.checked');
      }
    });

    cy.get('#basketball').check()
    //Check that the other options are not checked
    cy.get(':nth-child(2) > .card input[type="radio"]').each(($radio) => {
      if ($radio.val() === 'basketball') {
        cy.wrap($radio).should('be.checked');
      } else {
        cy.wrap($radio).should('not.be.checked');
      }
    });

  })
  it('Test Radio Button - Green disabled', () => {
    cy.visit('/');
    
    //Navigate to test Browser Info page
    cy.get('div a').contains(/Radio Buttons/i)
      .should('exist')
      .click();
    
    //Verify if redirected to correct page
    cy.get('h1').contains(/Radio Buttons page for Automation Testing Practice/i)

    //Verify that there is a card for selecting color and sports
    cy.get(':nth-child(1) > .card').should('exist').and('be.visible')
    cy.get(':nth-child(2) > .card').should('exist').and('be.visible')

    //Since the example has an ID for the radio button we'll use it
    cy.get('#yellow').check()

    //Check that green is disabled and not checked
    cy.get('#green').should('have.attr', 'disabled')
  })
})