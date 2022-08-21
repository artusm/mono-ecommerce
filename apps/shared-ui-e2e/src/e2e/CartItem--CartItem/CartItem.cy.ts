describe('shared-ui: CartItem component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cartitem--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to CartItem!');
    });
});
