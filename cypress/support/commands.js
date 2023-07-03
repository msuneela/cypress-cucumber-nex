
import loginPage from "../page-objects/login.page";

Cypress.Commands.add("login",(email, password)=> {
    loginPage.emailField.clear();
    loginPage.passwordField.clear();
    loginPage.emailField.type(email);
    loginPage.passwordField.type(password);
    loginPage.signinButton.click();
})
