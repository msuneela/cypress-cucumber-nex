 class Inventorypage {
 get addProduct(){
    return cy.get('.euiButton > .css-1bascr2-euiButtonDisplayContent', {timeout: 10000});
 }
 get addProductType(){
    return cy.get('.euiTitle > button', {timeout: 10000});
 }
 get productTypeInputFields(){
    return cy.get('input.euiFieldText', {timeout: 10000});
 }
 get productDescription(){
    return cy.get('textarea.euiTextArea', {timeout: 10000});
 }

 get productPrice(){
    return cy.get('[data-test-subj="product_Price"]', {timeout: 10000})
 }
 get saveChangesButton() {
    return cy.get(':nth-child(2) > ._button_1cuqw_33 > .css-1bascr2-euiButtonDisplayContent', {timeout: 10000});
 }
 get searchProductInput() {
    return cy.get('input.euiFieldSearch', {timeout: 10000});
 }
 get checkboxProduct(){
    return cy.get('.euiTableRowCellCheckbox > .euiTableCellContent', {timeout: 10000});
 }

 get deleteRecordButton() {
    return cy.get('button.euiButton.css-jcf9az-euiButtonDisplay-s-defaultMinWidth-fill-danger', {timeout: 10000});
 }
 get confirmDeleteButton() {
    return cy.get('button.euiButton.css-s7hl0p-euiButtonDisplay-m-defaultMinWidth-fill-danger', {timeout: 10000})
 }

 get deleteSuccessText() {
    return cy.get('#complete');
 }
}
export default new Inventorypage;