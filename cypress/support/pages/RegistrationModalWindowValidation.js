class ValidationElements {

    get heroDescriptionButton() {
        return cy.get('button.hero-descriptor_btn.btn.btn-primary')
    }

    get signUpName() {
        return cy.get('input#signupName')
    }

    get pSearchingElement() {
        return cy.get('p').contains('Name required')
    }

    get nameIsInvalid() {
        return cy.contains('Name is invalid')
    }

    clickHeroDescriptionButton() {
        this.heroDescriptionButton.click();
        return this;
    }

    inputSignUpName(option) {
        this.signUpName.focus().type(option).blur();
        return this;
    }

    shouldPElement() {
        this.pSearchingElement.should('be.visible');
        return this;
    }

    verifyNameIsInvalid() {
        this.nameIsInvalid.should('be.visible');
        return this;
    }

}


export default new ValidationElements();