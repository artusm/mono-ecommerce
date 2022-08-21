describe('shared-ui: Content component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=content--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Content!');
    });
});
