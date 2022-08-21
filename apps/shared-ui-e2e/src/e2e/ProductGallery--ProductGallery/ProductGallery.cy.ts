describe('shared-ui: ProductGallery component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=productgallery--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ProductGallery!');
    });
});
