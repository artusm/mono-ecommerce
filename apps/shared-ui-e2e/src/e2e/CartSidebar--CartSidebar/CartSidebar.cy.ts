describe('shared-ui: CartSidebar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cartsidebar--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to CartSidebar!');
    });
});
