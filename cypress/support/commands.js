// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands';

Cypress.Commands.add("login", (username, password) =>   {
    cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
    cy.get('#txt-username').type(username)
    cy.get('#txt-password').type(password)
    cy.get('#btn-login').click()
    cy.title().should('eq', 'CURA Healthcare Service') 
    cy.log('Loged in successfully----------------- ')       

})

Cypress.Commands.add("form", () =>   {
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
        cy.log('Appointment maded----------------- ')         
})

Cypress.Commands.add("verification", () =>   {
    cy.get('h2').contains('Appointment Confirmation');
    cy.log('Confirmation displayed----------------- ')         
})