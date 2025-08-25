class FuelExpensesPage {
  // Локатори елементів сторінки
  get fuelExpensesSection() {
    return cy.contains('Fuel expenses', { matchCase: false });
  }

  get AddAnExpenseButton() {
    return cy.contains('button','Add an expense');
  }

  get selectAddedCar() {
    return cy.get('select#addExpenseCar');
  }

  get datePickerSelection() {
    return cy.get('input#addExpenseDate')
  }

  get inputMileage() {
    return cy.get('input#addExpenseMileage')
  }

  get numbersOfLiters() {
    return cy.get('input#addExpenseLiters')
  }

  get totalCost() {
    return cy.get('input#addExpenseTotalCost')
  }

  get addButton() {
    return cy.get('ngb-modal-window .btn.btn-primary')
  }

    // Методи для взаємодії з елементами
  
  navigateFuelExpensesSection() {
    this.fuelExpensesSection.click();
    return this;
  }

  clickAddAnExpenseButton() {
    this.AddAnExpenseButton.click();
    return this;
  }

  chooseSelectCar() {
  this.selectAddedCar
    .find('option')
    .eq(0)
    .invoke('val')
    .then(value => {
      this.selectAddedCar.select(value);
    });

  return this;
  }

  inputStaticDate(date) {
    this.datePickerSelection.clear().type(date);
    return this;
  }

  addingMileage(mileas) {
    this.inputMileage.clear().type(mileas);
    return this;
  }

  addingNumbersOfLiters(value) {
    this.numbersOfLiters.type(value);
    return this;
  }

  addingTotalCost(value) {
    this.totalCost.type(value);
    return this;
  }

  clickAddButton() {
    this.addButton.click();
    return this;
  }
}

export default new FuelExpensesPage();