
describe('My First Test', () => 
{
    it('Verify titel of the page', () => {
        cy.visit('/')
        cy.findByText('Welcome to our store')
        cy.xpath('//ul[@class="top-menu c"]/li/a[text()="Computers "]').click()
    
        //cy.title().should('eq', 'nopCommerce demo store');
        //cy.get('input#small-searchterms').type("Build your own computer")
        //cy.xpath('//li[@class="yx-njv js-mega-nav__item"]/*[text()[contains(., "Product")]]').click()
        
        
    })
  })