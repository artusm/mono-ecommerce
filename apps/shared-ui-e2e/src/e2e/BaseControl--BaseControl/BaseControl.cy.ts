describe('shared-ui: BaseControl component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=basecontrol--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to BaseControl!');
    });
});
