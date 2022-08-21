describe('shared-ui: CoverImage component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=coverimage--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to CoverImage!');
    });
});
