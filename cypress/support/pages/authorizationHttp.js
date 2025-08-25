class AuthoriztionHttp {
  // Локатори елементів сторінки
  visitWithAuth() {
    cy.visit('/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto'
      }
    });
  }
}

export default new AuthoriztionHttp;