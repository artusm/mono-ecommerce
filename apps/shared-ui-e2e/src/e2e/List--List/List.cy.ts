describe('shared-ui: List component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=list--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to List!');
    });
});
