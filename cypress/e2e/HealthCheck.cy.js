import { HomePage } from "../pages/HomePage.po"

const homePage = new HomePage();

describe('Health check test', () => {
  it('visits the page and verifies its up', () => {
    cy.visit('/');
    homePage.getSearchButton().should('be.enabled');
    homePage.getSearchButton().type('test');
    cy.title().should('include', 'DATART');
  });
});