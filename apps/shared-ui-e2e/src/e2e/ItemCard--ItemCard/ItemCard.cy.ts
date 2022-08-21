describe('shared-ui: ItemCard component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=itemcard--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ItemCard!');
    });
});
