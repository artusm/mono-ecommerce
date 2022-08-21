describe('shared-ui: Select component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=select--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Select!');
    });
});
