describe('Home', () => {
  it('should display proper title', () => {
    cy.visit('/');
    cy.contains('#title', 'V2P2 Starter');
  });
});
