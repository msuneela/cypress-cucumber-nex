import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import inventoryPage from "../../page-objects/inventory.page";
const today = new Date();
const sufix = today.toLocaleDateString() + '_' + today.getTime();

Given("I am in Nexudus products homepage", () => {
    cy.visit(Cypress.env('BASEURL') + "qa/billing/products");
});


When("I enter username and password", () => {
    cy.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'));
});

When("I naviagate to product list and select add product and select manual entry", () => {
    cy.wait(500);
    inventoryPage.addProduct.trigger("click");
    inventoryPage.addProductType.contains('Manual entry').click();
});

When("I enter details and click save changes button", () => {
    inventoryPage.productTypeInputFields.eq(0).type("automation Test" + sufix);
    inventoryPage.productDescription.eq(0).type("description");
    inventoryPage.productDescription.eq(0).then($description => {
        $description.text().includes('description');
    })
    cy.wait(1000);
    inventoryPage.productPrice.scrollIntoView().should('be.visible');
    cy.wait(1000);
    inventoryPage.productPrice.clear({force: true});
    inventoryPage.productPrice.type(20, {force: true});
    cy.intercept('api/billing/products').as('products');
    inventoryPage.saveChangesButton.click();
    cy.wait('@products');
});
When("I should see list and search for recently added product", () => {
    inventoryPage.searchProductInput.type("automation Test");
});

When("I selct delete Product", () => {
    inventoryPage.checkboxProduct.eq(0).click();
    inventoryPage.deleteRecordButton.eq(0).click({ timeout: 2000 }, { force: true });
});
Then("I shoul able to delete product and see success message", () => {
    inventoryPage.confirmDeleteButton.eq(0).click({ force: true })
    inventoryPage.deleteSuccessText.should('contain', 'Delete completed');
});
