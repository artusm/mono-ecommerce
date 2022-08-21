describe('shared-ui: Name component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=name--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Name!');
    });
});
