describe('Fixture test', function () {
    
    
    before(function() {
        cy.fixture('example').then(function(data){

            this.data=data
        })
            
        })
    
    it('Verify titel of the page', function()  
    {

        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
        cy.get('#txt-username').type(this.data.username)
        cy.get('#txt-password').type(this.data.password)
        cy.get('#btn-login').click()
        cy.title().should('eq', 'CURA Healthcare Service')
    
        //cy.title().should('eq', 'nopCommerce demo store');
        //cy.get('input#small-searchterms').type("Build your own computer")
        //cy.xpath('//li[@class="yx-njv js-mega-nav__item"]/*[text()[contains(., "Product")]]').click()
        
        
    })
  })