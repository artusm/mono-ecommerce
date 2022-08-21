describe('shared-ui: Icon component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=icon--primary&args=icon;loading:false;classes;size;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Icon!');
    });
});
