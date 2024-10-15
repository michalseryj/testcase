import { HomePage } from "../pages/HomePage.po"

const homePage = new HomePage();

describe('Purchase process tests', () => {
  it('tests the whole purchase process happy path', () => {
    cy.visit('/');
    homePage.getTVCategoryButton().click();
    cy.url().should('eq', 'https://www.datart.cz/tv-audio-video.html');
  });
});