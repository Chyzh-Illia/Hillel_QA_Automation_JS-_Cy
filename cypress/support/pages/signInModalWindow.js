class ModalSignInWindow {
  // Локатори елементів сторінки
  get signInButton() {
    return cy.get('button.btn-outline-white.header_signin');
  }

  get emailInput() {
    return cy.get('input#signinEmail')
  }

  get passwordInput() {
    return cy.get('input#signinPassword')
  }

  get loginButton() {
    return cy.contains('button', 'Login')
  }

    // Методи для взаємодії з елементами
  
  clickSignInButton() {
    this.signInButton.click();
    return this;
  }
  
  typeEmailInput(email) {
    this.emailInput.type(email);
    return this;
  }

  typePasswordInput(password) {
    this.passwordInput.type(password);
    return this;
  }

  clickLogInButton() {
    this.loginButton.click();
    return this;
  }
}

export default new ModalSignInWindow();