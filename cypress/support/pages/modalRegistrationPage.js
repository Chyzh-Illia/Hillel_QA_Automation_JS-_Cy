class ModalRegistrationWindow {
  // Локатори елементів сторінки
  get firstInput() {
    return cy.get('input#signupName');
  }

  get secondInput() {
    return cy.get('input#signupLastName');
  }

  get emailInput() {
    return cy.get('input#signupEmail');
  }

  get passwordInput() {
      return cy.get('input#signupPassword');
  }

  get confirmPasswordInput() {
      return cy.get('input#signupRepeatPassword');
  }

  get registerButton() {
    return cy.get('div.modal-footer > button.btn.btn-primary');
  }

  // Методи для взаємодії з елементами
  typeFirstName(firstName) {
    this.firstInput.type(firstName);
    return this;
  }

  typeSecondName(secondName) {
    this.secondInput.type(secondName);
    return this;
  }

  typePassword(password) {
    this.passwordInput.type(password);
    return this;
  }

  typePasswordConfirm(confirmPassword) {
    this.confirmPasswordInput.type(confirmPassword);
    return this;
  }

  typeEmail(email) {
    this.emailInput.type(email);
    return this;
  }

  clickRegistrationButton() {
    this.registerButton.click( { multiple: true} );
  }
}

// Експорт класу для використання в тестах
export default new ModalRegistrationWindow();