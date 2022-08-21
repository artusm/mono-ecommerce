describe('shared-ui: ProductSidebar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=productsidebar--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ProductSidebar!');
    });
});
