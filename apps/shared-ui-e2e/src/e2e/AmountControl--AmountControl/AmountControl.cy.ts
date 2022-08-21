describe('shared-ui: AmountControl component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=amountcontrol--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to AmountControl!');
    });
});
