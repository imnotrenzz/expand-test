
describe('Practice Test Automation Website for Web UI & API', () => {
  it('Test Basic Auth Page - Visit site using the credentials in the link', () => {
    //Go to the website 'https://username:password@your-secured-site.com'

    cy.visit('https://admin:admin@practice.expandtesting.com/basic-auth');
    
    //Verify if redirected to correct page
    cy.get('h1').contains(/Basic Auth page for Automation Testing Practice/i)
  
  })
  it('Test Basic Auth - Manually do the headers', () => {
    const credentials = btoa('admin:admin'); 

    cy.request({
      method: 'GET',
      url: 'https://practice.expandtesting.com/basic-auth', 
      headers: {
        Authorization: `Basic ${credentials}`, 
      },
    }).then((response) => {
      expect(response.status).to.eq(200);

      }) 
  })

  it('Test Basic Auth Page - Visit site using WRONG credentials in the header', () => {
    const credentials = btoa('admn:admin'); 

    cy.request({
      method: 'GET',
      url: 'https://practice.expandtesting.com/basic-auth', 
      failOnStatusCode: false,
      headers: {
        Authorization: `Basic ${credentials}`, 
      },
    }).then((response) => {
      expect(response.status).to.eq(401);

      }) 
  })
})