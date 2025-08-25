/// <reference types="cypress" />
import authorizationHttp from "../../support/pages/authorizationHttp";
import signInModalWindow from "../../support/pages/signInModalWindow";
import myProfileGarage from "../../support/pages/myProfileGaragePage";
import fuelExpensesPage from "../../support/pages/fuelExpensesPage";

describe('Authorization in profile, creating carconfiguration', () => {
    beforeEach('HTTP authorization', () => {
        authorizationHttp
        .visitWithAuth()
        signInModalWindow
            .clickSignInButton()
            .typeEmailInput(Cypress.env('email'))
            .typePasswordInput(Cypress.env('password'), {sensetive: true})
            .clickLogInButton()
    });

    it('Open and Login in profile "Sign in modal window"', () => {
        myProfileGarage
        .clickAddCarButton()
        .selectCarOption('BMW')
        .selectModelOption('X5')
        .typeMileageInput('1150')
        .clickAddButton()
    });

    it('Navigation to the "Fuel Expenses Section"', () => {
        fuelExpensesPage
        .navigateFuelExpensesSection()
        .clickAddAnExpenseButton()
        .chooseSelectCar('BMW X5')
        .inputStaticDate('20.08.2025')
        .addingMileage('2000')
        .addingNumbersOfLiters('150')
        .addingTotalCost('200')
        .clickAddButton()
    })
}) 