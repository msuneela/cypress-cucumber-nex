import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../page-objects/login.page";
import inventoryPage, { Inventorypage } from "../../page-objects/inventory.page";
import dashboardPage from "../../page-objects/dashboard.page";
const today = new Date();
const sufix = today.toLocaleDateString() + '_' + today.getTime();

Given("I am in Nexudus homepage", () => {
    cy.visit(Cypress.env('BASEURL'));
});

When("I enter invalid username and password", () => {
    loginPage.emailField.type('bad@example.com');
    loginPage.passwordField.type('hsdjad');
    loginPage.signinButton.click();
});

Then("I should see error message", () => {
    loginPage.errorMessageLogin.should('contain', 'The email or password is incorrect.');
    loginPage.emailField.first().clear();
    loginPage.passwordField.first().clear();
});

When("I enter valid username and password", () => {

 cy.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'));
});

Then("I should see Dashboard page", () => {
    dashboardPage.breadCrumbs.eq(1).click();
    dashboardPage.breadCrumbs.should('have.length', 2, { timeout: 5000 });
    dashboardPage.breadCrumbs.eq(1).should('contain', 'Dashboard');
});

