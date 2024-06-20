describe('Sign Up Page', () => {
  beforeEach(() => {
    cy.visit('3'); // Assuming your sign-up page route is '/signup'
  });

  it('displays name, email, password, and confirm password input fields', () => {
    cy.get('input[name="name"]').should('exist');
    cy.get('input[type="email"]').should('exist');
    cy.get('input[type="password"]').should('exist');
    cy.get('input[placeholder="Confirm Password"]').should('exist');
  });

  it('allows user to input name, email, password, and confirm password', () => {
    const name = 'Test User';
    const email = 'test@example.com';
    const password = 'testPassword123';

    cy.get('input[name="name"]').type(name).should('have.value', name);
    cy.get('input[type="email"]').type(email).should('have.value', email);
    cy.get('input[type="password"]').type(password).should('have.value', password);
    cy.get('input[placeholder="Confirm Password"]').type(password).should('have.value', password);
  });

  it('redirects to sign in page when sign in link is clicked', () => {
    cy.contains('Sign In').click(); // Assuming your sign-in link has 'Sign In' text
    cy.url().should('include', '/signin'); // Assuming your sign-in page route is '/signin'
    // Add assertions for sign-in page redirection
  });

  it('allows user to sign up', () => {
    const name = 'Test User';
    const email = 'test@example.com';
    const password = 'testPassword123';

    cy.get('input[name="name"]').type(name);
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);
    cy.get('input[placeholder="Confirm Password"]').type(password);
    cy.contains('Sign Up').click(); // Assuming your sign-up button has 'Sign Up' text
    // Add assertions for successful sign-up behavior
  });

  it('displays error message for invalid input', () => {
    // Test invalid inputs (e.g., invalid email, password mismatch)
    cy.get('input[name="name"]').type(''); // Empty name
    cy.get('input[type="email"]').type('invalid_email'); // Invalid email format
    cy.get('input[type="password"]').type('password123');
    cy.get('input[placeholder="Confirm Password"]').type('password456'); // Passwords mismatch
    cy.contains('Sign Up').click();
    // Add assertions for error message display for invalid inputs
  });
});
