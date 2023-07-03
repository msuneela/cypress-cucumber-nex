class DashboardPage{
get breadCrumbs(){
return cy.get('.euiBreadcrumb__content', { timeout: 5000 });
}
}
export default new DashboardPage;