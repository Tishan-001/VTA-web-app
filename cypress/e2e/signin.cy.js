describe('Sign In Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/sinin'); // Assuming your sign-in page route is '/'
  });

  it('displays email and password input fields', () => {
    cy.get('input[type="email"]');
    cy.get('input[type="password"]');
  });

  it('allows user to input email and password', () => {
    const email = 'test@example.com';
    const password = 'testPassword123';

    cy.get('input[type="email"]').type(email).should('have.value', email);
    cy.get('input[type="password"]').type(password).should('have.value', password);
  });

  it('allows user to remember login', () => {
    cy.get('input[type="checkbox"]').check().should('be.checked');
  });

  it('allows user to sign in', () => {
    const email = 'test@example.com';
    const password = 'testPassword123';

    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);
    cy.contains('Sign In').click(); // Assuming your sign-in button has 'Sign In' text
    // Add assertions for successful sign-in behavior
  });

  it('redirects to sign up page when sign up link is clicked', () => {
    cy.contains('Sign Up').click(); // Assuming your sign-up link has 'Sign Up' text
    cy.url().should('include', '/signup'); // Assuming your sign-up page route is '/signup'
    // Add assertions for sign-up page redirection
  });

  it('displays error message for invalid credentials', () => {
    const email = 'invalid@example.com';
    const password = 'invalidPassword';

    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);
    cy.contains('Sign In').click(); // Assuming your sign-in button has 'Sign In' text
    // Add assertions for error message display for invalid credentials
  });
});
