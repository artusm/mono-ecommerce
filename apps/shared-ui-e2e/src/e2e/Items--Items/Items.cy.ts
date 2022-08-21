describe('shared-ui: Items component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=items--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Items!');
    });
});
