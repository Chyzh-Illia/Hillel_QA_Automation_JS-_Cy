/// <reference types="cypress" />
import commands from "../../support/commands";
import authorizationHttp from "../../support/pages/authorizationHttp";
import ModalRegistrationWindow from "../../support/pages/modalRegistrationPage";
import RegistrationModalWindowValidation from "../../support/pages/RegistrationModalWindowValidation";

describe('LoginHttp', () => {
    beforeEach('Redirect on main automation page with http login',() => {
        authorizationHttp
        .visitWithAuth();
    });

    it('Should show error for empty Name field', () => {
        RegistrationModalWindowValidation
            .clickHeroDescriptionButton()
            .leaveSignUpNameEmpty()
            .verifyNameRequiredVisible();
    });

    it('Should show error for invalid Name', () => {
        RegistrationModalWindowValidation
            .clickHeroDescriptionButton()
            .typeSignUpName('123')
            .verifyNameIsInvalid();
    });

    it('Should accept valid Name', () => {
        RegistrationModalWindowValidation
            .clickHeroDescriptionButton()
            .typeSignUpName('John')
            .verifyNameRequiredNotExist();
    });

    it('Should show error for invalid Email', () => {
        RegistrationModalWindowValidation
            .clickHeroDescriptionButton()
            .typeSignUpEmail('123')
            .verifyIncorrectEmail();
    });

    it('Should accept valid Email', () => {
        RegistrationModalWindowValidation
            .clickHeroDescriptionButton()
            .typeSignUpEmail('test@test.com')
            .verifyNoEmailError();
    });

    it('Should validate Password rules', () => {
        RegistrationModalWindowValidation
            .clickHeroDescriptionButton()
            .typeSignUpPassword('short')
            .verifyPasswordLengthErrorVisible();
    });

    it('Should show error if passwords do not match', () => {
        RegistrationModalWindowValidation
            .clickHeroDescriptionButton()
            .typeSignUpPassword('Qwerty123')
            .typeSignUpRepeatPassword('Qwerty124')
            .verifyPasswordMismatchErrorVisible();
    });

    it('Should enable Register button for valid form', () => {
        RegistrationModalWindowValidation
            .clickHeroDescriptionButton()
            .typeSignUpName('John')
            .typeSignUpLastName('Snow')
            .typeSignUpEmail('test@test.com')
            .typeSignUpPassword('Qwerty123')
            .typeSignUpRepeatPassword('Qwerty123')
            .verifyRegisterButtonEnabled();
    });

    it('Open the "Sign up modal window" => Registration', () => {
        RegistrationModalWindowValidation.clickHeroDescriptionButton();

        ModalRegistrationWindow
            .typeFirstName('John')
            .typeSecondName('Snow')
            .typeEmail('chyzh.illia+1@gmail.com')
            .typePassword('Qwerty123123', { sensetive: true })
            .typePasswordConfirm('Qwerty123123', { sensetive: true })
            .clickRegistrationButton();
    });
});