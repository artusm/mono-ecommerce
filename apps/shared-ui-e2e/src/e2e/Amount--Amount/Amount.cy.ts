describe('shared-ui: Amount component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=amount--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Amount!');
    });
});
