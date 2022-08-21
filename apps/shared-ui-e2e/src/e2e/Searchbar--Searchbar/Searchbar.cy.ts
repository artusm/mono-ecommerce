describe('shared-ui: Searchbar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=searchbar--primary&args=input;items;handleClear;handleSubmit;handleInput;loading:false;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Searchbar!');
    });
});
