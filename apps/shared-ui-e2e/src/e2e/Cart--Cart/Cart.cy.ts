describe('shared-ui: Cart component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cart--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Cart!');
    });
});
