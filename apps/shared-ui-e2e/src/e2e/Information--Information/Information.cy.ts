describe('shared-ui: Information component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=information--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Information!');
    });
});
