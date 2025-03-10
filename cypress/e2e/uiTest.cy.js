import { HomePage } from "../pages/Google/HomePage.po"
import { MoroSystemsHomePage } from "../pages/MoroSystems/MoroSystemsHomePage.po";
import { CareersPage } from "../pages/MoroSystems/CareersPage.po";

const homePage = new HomePage();
const moroSystemsHomePage = new MoroSystemsHomePage();
const careersPage = new CareersPage();

describe('Tests for MoroSystems webpage', () => {

  it('Tests the process of finding open positions', () => {
    
    //skipped this part in the AT scenario, as the captcha(selecting bikes and crosswalks :)) was required after multiple runs
    //could be solved by custom search google engine for automated testing
  
    /*  cy.visit('/');
    homePage.getCookieConsentAcceptButton().click();    
    homePage.searchForString('Moro Systems');
    cy.url().should('include', 'search');
    cy.contains('MoroSystems - užitečná IT řešení a technologické inovace').should('be.visible'); */  
    
    

    cy.visit('https://www.morosystems.cz/')
    moroSystemsHomePage.getAcceptCookiesButton().click();
    moroSystemsHomePage.getCareerButton().click();
    cy.url().should('include', 'kariera');
    careersPage.getLocationDropdown().click();
    cy.get('label[data-filter="Brno"]').click();
    cy.get('span.c-positions__info span').should('include.text', 'Brno');
  });

});