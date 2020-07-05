describe('make an apoinment', () => 
{
    it('first login', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
        cy.get('#txt-username').type('John Doe')
        cy.get('#txt-password').type('ThisIsNotAPassword')
        cy.get('#btn-login').click()
        cy.title().should('eq', 'CURA Healthcare Service')
    })
    it('fill in a form', () => {
        cy.get('#combo_facility').select('Hongkong CURA Healthcare Center').should('have.value', 'Hongkong CURA Healthcare Center')
        //cy.get('select').select('Hongkong CURA Healthcare Center')
        cy.get('#chk_hospotal_readmission').should('be.visible').should('be.enabled').click();
        cy.get('#radio_program_medicare').click();
        cy.get('#radio_program_medicare').check().should('be.checked').and('have.value', 'Medicare')
        cy.wait(3000)
        cy.get('#txt_visit_date').type('25/07/2020');
        cy.get('#txt_comment').click({force: true});
        cy.get('#txt_comment').type('Alfresa test');
        cy.get('#btn-book-appointment').click()
    })

    it('title verification', () => {

        cy.get('h2').contains('Appointment Confirmation');
    })

    it('data table check', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('[name=BookTable]').contains('td', 'Learn Selenium').should('be.visible')
        cy.get('table[name=BookTable]>tbody > tr td:nth-child(2)').each(($e1,index,$list) => {

            const text=$e1.text()
            if(text.includes("Amode"))
            {
                cy.get('table[name=BookTable]>tbody>tr td:nth-child(1)').eq(index).then(function(bname)
                {
                    const bookName= bname.text
                    cy.log('bookname ' + ' : ' + bookName)
                    expect(bookName).to.equal("Master In Java")
                })
        
        }
    })

  })
})