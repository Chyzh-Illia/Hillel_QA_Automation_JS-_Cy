/// <reference types="cypress" />
import commands from "../../support/commands";
import authorizationHttp from "../../support/pages/authorizationHttp";
import ModalRegistrationWindow from "../../support/pages/modalRegistrationPage";

describe('LoginHttp', () => {
    beforeEach('Redirect on main automation page with http login',() => {
        authorizationHttp
        .httpAuthorization;
    });

    it('Should show error for empty Name field', () => {
        cy.get('button.hero-descriptor_btn.btn.btn-primary').click();
        cy.get('input#signupName').focus().blur(); 
        cy.get('p').contains('Name required').should('be.visible');
    });

    it('Should show error for invalid Name', () => {
        cy.get('button.hero-descriptor_btn.btn.btn-primary').click();
        cy.get('input#signupName').type('123').blur();
        cy.contains('Name is invalid').should('be.visible');
    });

    it('Should accept valid Name', () => {
        cy.get('button.hero-descriptor_btn.btn.btn-primary').click();
        cy.get('input#signupName').type('John').blur();
        cy.contains('Name is invalid').should('not.exist');
        cy.contains('Name is required').should('not.exist');
    });

    it('Should show error for invalid Email', () => {
        cy.get('button.hero-descriptor_btn.btn.btn-primary').click();
        cy.get('input#signupEmail').type('abc').blur();
        cy.contains('Email is incorrect').should('be.visible');
    });

    it('Should accept valid Email', () => {
        cy.get('button.hero-descriptor_btn.btn.btn-primary').click();
        cy.get('input#signupEmail').clear().type('test@test.com').blur();
        cy.contains('Email is incorrect').should('not.exist');
    });

    it('Should validate Password rules', () => {
        cy.get('button.hero-descriptor_btn.btn.btn-primary').click();
        cy.get('input#signupPassword').type('short').blur();
        cy.contains('Password has to be from 8 to 15 characters long').should('be.visible');
    });

    it('Should show error if passwords do not match', () => {
        cy.get('button.hero-descriptor_btn.btn.btn-primary').click();
        cy.get('input#signupPassword').type('Qwerty123');
        cy.get('input#signupRepeatPassword').type('Qwerty124').blur();
        cy.contains('Passwords do not match').should('be.visible');
    });

    it('Should enable Register button for valid form', () => {
        cy.get('button.hero-descriptor_btn.btn.btn-primary').click();
        cy.get('input#signupName').type('John');
        cy.get('input#signupLastName').type('Snow');
        cy.get('input#signupEmail').type('test@test.com');
        cy.get('input#signupPassword').type('Qwerty123');
        cy.get('input#signupRepeatPassword').type('Qwerty123');
        
        cy.get('button.btn.btn-primary').should('not.be.disabled');
    });

    it('Openen the "Sign up modal windows" => Registration', () => {
        cy.get('button.hero-descriptor_btn.btn.btn-primary').click();
        ModalRegistrationWindow
        .typeFirstName('John')
        .typeSecondName('Snow')
        .typeEmail('chyzh.illia+1@gmail.com')
        .typePassword('Qwerty123123', {sensetive: true})
        .typePasswordConfirm('Qwerty123123', {sensetive: true})
        .clickRegistrationButton();
    })
});