describe('Login and Logout Functionality', () => {
  it('logs in and logs out successfully', () => {
    // Visit the page
    cy.visit('http://127.0.0.1:8080/');

    cy.wait(1000);

    // Trigger the login modal
    cy.get('[data-auth=login]').eq(1).click();

    cy.wait(1000);

    // Fill in the login form
    cy.get('#loginEmail').type('aledalene@stud.noroff.no');
    cy.get('#loginPassword').type('passord123');
    cy.get('#loginForm').submit();

    // Assert that the login was successful
    cy.url().should('include', 'view=profile');

    // Trigger the logout
    cy.get('[data-auth=logout]').click();

    // Assert that the login modal is closed
    cy.get('#registerForm').should('be.visible');
  });
});
