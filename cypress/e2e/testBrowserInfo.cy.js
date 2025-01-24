
describe('Practice Test Automation Website for Web UI & API', () => {
  it('Test Browser Info ', () => {
    //Go to the website
    cy.visit('/');
    
    //Navigate to test Browser Info page
    cy.get('div a').contains(/My Browser Information/i)
      .should('exist')
      .click();
    
    //Verify if redirected to correct page
    cy.get('h1').contains(/My Browser Information page for Automation Testing Practice/i)

    //Verify that there is a button for displaying browser info
    cy.get('#browser-toggle').should('be.visible')
    
    //Click
    cy.get('#browser-toggle').click()
    
    //Verify that the table is visible
    cy.get('#browser-info').should('be.visible')

    //Close or make the table disappear
    cy.get('#browser-toggle').click()

    //Verify that the table is visible
    cy.get('#browser-info').should('not.be.visible')
  })

})