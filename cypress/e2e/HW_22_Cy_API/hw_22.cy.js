/// <reference types="cypress" />
import authorizationHttp from "../../support/pages/authorizationHttp";
import signInModalWindow from "../../support/pages/signInModalWindow";
import myProfileGarage from "../../support/pages/myProfileGaragePage";
import fuelExpensesPage from "../../support/pages/fuelExpensesPage";

describe('Authorization in profile, creating carconfiguration', () => {
    beforeEach('HTTP authorization', () => {
        cy.intercept("POST", "**/api/auth/signin").as("signin");
        authorizationHttp
        .visitWithAuth()
        signInModalWindow
            .clickSignInButton()
            .typeEmailInput(Cypress.env('email'))
            .typePasswordInput(Cypress.env('password'), {sensetive: true})
            .clickLogInButton()
        cy.wait("@signin").its("response.statusCode").should("eq", 200);

        cy.getCookie("sid").should("exist");
    });

    it('Open and Login in profile "Sign in modal window" => Create a car and validate API response', () => {
        cy.intercept('POST', '**/api/cars').as('createCar');
        myProfileGarage
        .clickAddCarButton()
        .selectCarOption('BMW')
        .selectModelOption('X5')
        .typeMileageInput(1150)
        .clickAddButton()
        cy.wait('@createCar').then((interception) => {
        expect(interception.response.statusCode).to.eq(201);

        const carId = interception.response.body.data.id;
        cy.log('Created car ID:', carId);
        cy.writeFile('cypress/fixtures/carGarage.json', {
            id: carId,
            brand: 'BMW',
            model: 'X5',
            mileage: 1150
            });
        cy.fixture('carGarage.json').then((createdCar) => {
            cy.request({
            method: 'GET',
            url: '/api/cars'
            }).then((response) => {
                expect(response.status).to.eq(200);
                const foundCar = response.body.data.find(c => c.id === createdCar.id);

                expect(foundCar).to.exist;
                expect(foundCar.brand).to.eq(createdCar.brand);
                expect(foundCar.model).to.eq(createdCar.model);
                expect(foundCar.mileage).to.eq(createdCar.mileage);
                });
            });
        });
    });
    
    it('Create expense for existing car via API', () => {
         cy.fixture('carGarage.json').then((createdCar) => {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`; 

            cy.createExpense(createdCar.id, 2000, 50, 250, formattedDate)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.status).to.eq('ok');

                const expense = response.body.data;
                expect(expense).to.have.property('id');
                expect(expense.carId).to.eq(createdCar.id);
                expect(expense.mileage).to.eq(2000);
                expect(expense.liters).to.eq(50);
                expect(expense.totalCost).to.eq(250);
            });
        });
    });

    it('Navigation to the "Fuel Expenses Section"', () => {
        fuelExpensesPage
        .navigateFuelExpensesSection()
        .clickAddAnExpenseButton()
        .chooseSelectCar('BMW X5')
        .inputStaticDate('20.08.2025')
        .addingMileage('2000')
        .addingNumbersOfLiters('50')
        .addingTotalCost('250')
        .clickAddButton()

    });

    it('Validate created expense via UI in "Fuel Expenses Section"', () => {
        cy.fixture('carGarage.json').then((createdCar) => {
            const mileage = 2000;
            const liters = 50;
            const totalCost = 250;
            const today = new Date();
            const day = String(today.getDate()).padStart(2, '0');
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const year = today.getFullYear();
            const formattedDate = `${day}.${month}.${year}`;

            fuelExpensesPage
            .navigateFuelExpensesSection();

            cy.get('#carSelectDropdown').click();
            cy.contains('.car-select-dropdown_item', 'BMW X5').click({ force: true });

            cy.wait(2000); 

            cy.get('table') 
            .find('tr') 
            .contains('td.font-weight-bold', formattedDate)
            .should('exist')
            .parent() 
            .within(() => {
                cy.get('td').eq(1).should('contain', mileage); 
                cy.get('td').eq(2).should('contain', `${liters}L`); 
                cy.get('td').eq(3).should('contain', `${totalCost}.00 USD`);
            });
        });
    });
})