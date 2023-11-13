describe('Login Form Validation', () => {
  it('shows an error message for invalid credentials', () => {
    // Visit the page
    cy.visit('http://127.0.0.1:8080/');

    cy.wait(1000);

    // Trigger the login modal
    cy.get('[data-auth=login]').eq(1).click();

    cy.wait(1000);

    // Fill in the login form with invalid credentials
    cy.get('#loginEmail').type('invalidemail@stud.noroff.no');
    cy.get('#loginPassword').type('invalidpassword');
    cy.get('#loginForm').submit();

    // Assert that the login form is not submitted
    cy.url().should('not.include', 'view=profile');

    // Get error message and check if it contains "Incorrect"
    cy.get('.error-message').should('contain', 'Incorrect');
  });
});
