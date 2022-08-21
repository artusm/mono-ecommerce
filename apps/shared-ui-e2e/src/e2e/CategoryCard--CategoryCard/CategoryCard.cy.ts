describe('shared-ui: CategoryCard component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=categorycard--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to CategoryCard!');
    });
});
