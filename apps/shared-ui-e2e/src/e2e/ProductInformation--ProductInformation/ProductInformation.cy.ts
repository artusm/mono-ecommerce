describe('shared-ui: ProductInformation component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=productinformation--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ProductInformation!');
    });
});
