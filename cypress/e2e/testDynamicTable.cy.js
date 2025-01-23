
describe('Practice Test Automation Website for Web UI & API', () => {
  it('Test Dynamic Table Page', () => {
    //Go to the website
    cy.visit('/');
    
    //Navigate to test Dynamic Table page
    cy.get('div a').contains(/Dynamic Table/i)
      .should('exist')
      .click();
    
    //Verify if redirected to correct page
    cy.get('h1').contains(/Dynamic Table page for Automation Testing Practice/i)

    
    let extractedCpuValue;

    // Save the correct CPU usage
    cy.get('#chrome-cpu')
      .invoke('text')
      .then((text) => {
        extractedCpuValue = parseFloat(text.match(/[\d.]+/)[0]); 
      });

    // Find the column of CPU and the row for Chrome
    cy.get('.table thead tr')
      .find('th') 
      .then(($headers) => {
        let cpuIndex = -1;
        $headers.each((index, header) => {
          if (header.innerText.trim() === 'CPU') {
            cpuIndex = index;
          }
        });
        cy.get('.table tbody tr')
          .contains('td', 'Chrome') 
          .parent() 
          .find('td') 
          .eq(cpuIndex) 
          .invoke('text') 
          .then((cpuValue) => {
            const chromeCpuValue = parseFloat(cpuValue.trim().match(/[\d.]+/)[0]);
            cy.log(`Extracted Chrome CPU Value from Table: ${chromeCpuValue}`);

            //Compare the two values
            expect(chromeCpuValue).to.equal(extractedCpuValue); 
          });
      });
  })
})