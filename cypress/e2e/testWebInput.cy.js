
describe('Practice Test Automation Website for Web UI & API', () => {
  it('Test Web Inputs', () => {
    //Go to the webiste
    cy.visit('/');

    //Open the link for the web input tests
    cy.get('div a').contains(/Web inputs/i)
      .should('exist')
      .click();
    
    //Check if the URL is correct
    cy.url().should('contain', 'inputs');

    //Check if the header contains the paragraph for input testing
    cy.get('h1').should('contain',  'Web inputs page');

    //Verify if the buttons are visible and clickable
    cy.get('#btn-display-inputs').should('be.visible')
      .and('not.be.disabled')

    cy.get('#btn-clear-inputs').should('be.visible')
      .and('not.be.disabled')

    //Find and type a LETTER on the Input for Numbers
    cy.get('#input-number').click()
      .type('ABCD');
    
    //Verify that the input/textbox does not contain letters.
    cy.get('#input-number').should('be.empty');

    //Find and type a NUMBER on the Input for Numbers
    cy.get('#input-number').click()
      .type('123');

    //Verify
    cy.get('#input-number').invoke('val').should('not.be.empty');
    
    //Find and type a LETTER on the Input for Text
    cy.get('#input-text').click()
      .type('Text Here 123')
    
    //Verify that the input/textbox does contain text.  
    cy.get('#input-text').invoke('val').should('not.be.empty');

    cy.get('#input-password').click()
      .type('password')
    
    cy.get('#input-password').should('have.attr', 'type', 'password');

    const date = "2025-01-21"
    cy.get('#input-date').click()
      .type(date)

    //Click the display button
    cy.get('#btn-display-inputs').click()

    //Check if the output is visible
    cy.get('#result').should('be.visible')

    //Check if the output is the same with the inputs
    cy.get('#input-number')
      .invoke('val') 
      .then((inputValue) => {
        cy.get('#output-number').should('contain', inputValue);
      });
    
    cy.get('#input-text')
      .invoke('val') 
      .then((inputValue) => {
        cy.get('#output-text').should('contain', inputValue);
      });
    cy.get('#input-password')
      .invoke('val') 
      .then((inputValue) => {
        cy.get('#output-password').should('contain', inputValue);
      });
    cy.get('#input-date')
      .invoke('val') 
      .then((inputValue) => {
        cy.get('#output-date').should('contain', inputValue);
      });

    //Click Clear Inputs
    cy.get('#btn-clear-inputs').click()
    cy.get('#result').should('be.empty')
  })
})