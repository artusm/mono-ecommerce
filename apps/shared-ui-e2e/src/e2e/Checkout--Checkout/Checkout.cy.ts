describe('shared-ui: Checkout component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=checkout--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Checkout!');
    });
});
