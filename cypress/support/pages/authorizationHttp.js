class AuthoriztionHttp {
  // Локатори елементів сторінки
  get httpAuthorization() {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
  }
}

export default new AuthoriztionHttp;