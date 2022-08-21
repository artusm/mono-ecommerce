describe('shared-ui: NavButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=navbutton--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to NavButton!');
    });
});
