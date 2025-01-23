const DigestFetch = require('digest-fetch')

describe('Practice Test Automation Website for Web UI & API', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it.skip('Test Basic Auth Page - Visit site using the credentials in the link', () => {
    //Go to the website 
    cy.visit('/');
    
    const client = new DigestFetch('admin', 'admin')

    cy.get('div a').contains(/Digest Auth/i)
      .should('exist')
      .click();

    client.fetch('https://practice.expandtesting.com/digest-auth', { method: 'GET' })
      .then((response) => response.text())
      .then((body) => {
        cy.document().invoke('write', body);
        // Assert the div with the specific text
        cy.get('div p').contains('Congratulations').should('be.visible');
      })
    //Verify if redirected to correct page
    //cy.get('h1').contains(/Digest Auth page for Automation Testing Practice/i)
  
  })
})