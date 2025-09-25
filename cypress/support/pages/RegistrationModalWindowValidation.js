class RegistrationModalWindowValidation {

    // --- Locators ---
    get heroDescriptionButton() {
        return cy.get('button.hero-descriptor_btn.btn.btn-primary');
    }

    get signUpName() {
        return cy.get('input#signupName');
    }

    get signUpLastName() {
        return cy.get('input#signupLastName');
    }

    get signUpEmail() {
        return cy.get('input#signupEmail');
    }

    get signUpPassword() {
        return cy.get('input#signupPassword');
    }

    get signUpRepeatPassword() {
        return cy.get('input#signupRepeatPassword');
    }

    get registerButton() {
        return cy.get('button.btn.btn-primary');
    }

    get nameIsInvalid() {
        return cy.contains('Name is invalid');
    }

    get nameIsRequired() {
        return cy.get('.invalid-feedback > p');
    }

    get emailIncorrect() {
        return cy.contains('Email is incorrect');
    }

    get passwordLengthError() {
        return cy.contains('Password has to be from 8 to 15 characters long');
    }

    get passwordMismatchError() {
        return cy.contains('Passwords do not match');
    }

    clickHeroDescriptionButton() {
        this.heroDescriptionButton.click();
        return this;
    }

    typeSignUpName(value) {
        this.signUpName.clear().type(value).blur();
        return this;
    }

    leaveSignUpNameEmpty() {
        this.signUpName.clear().blur();
        return this;
    }

    typeSignUpLastName(value) {
        this.signUpLastName.clear().type(value).blur();
        return this;
    }

    typeSignUpEmail(value) {
        this.signUpEmail.clear().type(value).blur();
        return this;
    }

    leaveSignUpEmailEmpty() {
        this.signUpEmail.clear().blur();
        return this;
    }

    typeSignUpPassword(value) {
        this.signUpPassword.clear().type(value).blur();
        return this;
    }

    leaveSignUpPasswordEmpty() {
        this.signUpPassword.clear().blur();
        return this;
    }

    typeSignUpRepeatPassword(value) {
        this.signUpRepeatPassword.clear().type(value).blur();
        return this;
    }

    leaveSignUpRepeatPasswordEmpty() {
        this.signUpRepeatPassword.clear().blur();
        return this;
    }

    verifyNameIsInvalid() {
        this.nameIsInvalid.should('be.visible');
        return this;
    }

    verifyNameRequiredVisible() {
        this.nameIsRequired.should('be.visible');
        return this;
    }

    verifyNameRequiredNotExist() {
        this.nameIsRequired.should('not.exist');
        return this;
    }

    verifyIncorrectEmail() {
        this.emailIncorrect.should('be.visible');
        return this;
    }

    verifyNoEmailError() {
        this.emailIncorrect.should('not.exist');
        return this;
    }

    verifyPasswordLengthErrorVisible() {
        this.passwordLengthError.should('be.visible');
        return this;
    }

    verifyPasswordMismatchErrorVisible() {
        this.passwordMismatchError.should('be.visible');
        return this;
    }

    verifyRegisterButtonEnabled() {
        this.registerButton.should('not.be.disabled');
        return this;
    }
}

export default new RegistrationModalWindowValidation();