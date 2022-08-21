describe('shared-ui: Control component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=control--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Control!');
    });
});
