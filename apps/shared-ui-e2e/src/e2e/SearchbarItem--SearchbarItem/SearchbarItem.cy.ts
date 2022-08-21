describe('shared-ui: SearchbarItem component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=searchbaritem--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SearchbarItem!');
    });
});
