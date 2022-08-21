describe('shared-ui: Dropdown component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dropdown--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Dropdown!');
    });
});
