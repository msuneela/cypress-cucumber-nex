class Loginpage{
get emailField(){
    return cy.get('input[name= "Email"]');
}
get passwordField(){
    return cy.get('input[name="Password"]');
}
get signinButton(){
    return cy.get('button.euiButton');
}
get errorMessageLogin(){
    return cy.get('.euiPanel > .euiText');
}

}
export default new Loginpage();