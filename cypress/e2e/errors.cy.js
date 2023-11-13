describe('Check for 404 Errors', () => {
  it('logs any 404 errors', () => {
    // Visit the home page
    cy.visit('http://127.0.0.1:8080/');

    cy.wait(1000);

    // Get all anchor elements on the page
    cy.get('a').each((link) => {
      // Get the href attribute of each link
      const href = link.attr('href');

      // Skip if the href is undefined or starts with #
      if (href && !href.startsWith('#')) {
        // Visit the link and log any 404 errors
        cy.request(href).then((response) => {
          if (response.status === 404) {
            cy.log(`404 Error found: ${href}`);
          }
        });
      }
    });
  });
});
