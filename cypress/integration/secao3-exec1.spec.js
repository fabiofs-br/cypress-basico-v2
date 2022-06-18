/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {
        cy.get('#firstName').type('Fabio')
        cy.get('#lastName').type('Ferreira')
        cy.get('#email').type('fabiofs.br@gmail.com')
        cy.get('#open-text-area').type('Socorro!!!')
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible');
    })
})
