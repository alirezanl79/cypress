describe('CostumSuite', function () {
    before(function() {
        cy.fixture('example').then(function(data){

            this.data=data
        })
            
        })
    
    it('Verify titel of the page', function()  
    {
        cy.login(this.data.username,this.data.password )  
    })
  })

  describe('Make an Appointment', function () {
    
    it('Fill in the form', function()  
    {
        cy.form()
    })
  })

  describe('Confirmation verification', function () {
    
    it('Text verification', function()  
    {
        cy.verification()
    })
  })