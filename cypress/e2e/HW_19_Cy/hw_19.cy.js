/// <reference types="cypress" />

describe('Searching HTML elements', () => {
    beforeEach('Redirect on main automation page with http login',() => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
    });

    it('Searching the "Sign up" button in header', () => {
        cy.contains('button', 'Sign up')

    })

    it('Searching html elements in the footer: Links', () => {
        cy.get('div#contactsSection').within(() => {
            cy.get('a[href="https://www.facebook.com/Hillel.IT.School"]').should('be.visible')
            cy.get('a[href="https://t.me/ithillel_kyiv"]').should('be.visible')
            cy.get('a[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]').should('be.visible')
            cy.get('a[href="https://www.instagram.com/hillel_itschool/"]').should('be.visible')
            cy.get('a[href="https://www.linkedin.com/school/ithillel/"]').should('be.visible')
        })
    })

    it('Searching html elements in the footer: Link on the owner site', () => {
        cy.get('div#contactsSection').within(() => {
            cy.get('a[href="https://ithillel.ua"]').should('be.visible')
            cy.get('a[href="mailto:developer@ithillel.ua"]').should('be.visible')
        })
    })

    it('Searching html elements in the footer: Link on the support site', () => {
        cy.get('a[href="mailto:developer@ithillel.ua"]').should('be.visible')
    })
})