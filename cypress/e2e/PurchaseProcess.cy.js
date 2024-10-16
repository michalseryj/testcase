import { CartPage } from "../pages/CartPage.po";
import { HomePage } from "../pages/HomePage.po"
import { ProductCategoryPage } from "../pages/ProductCategoryPage.po";
import { ProductPage } from "../pages/ProductPage.po";

const homePage = new HomePage();
const productCategoryPage = new ProductCategoryPage();
const productPage = new ProductPage();
const cartPage = new CartPage();

describe('Purchase process tests', () => {

    beforeEach(() => {
        cy.visit('/');
        homePage.acceptCookies();
        homePage.login();
      });

  it('Tests the whole purchase process happy path', () => {
    homePage.getTVCategoryButton().should('be.visible');
    homePage.getTVCategoryButton().click();
    cy.url().should('eq', 'https://www.datart.cz/tv-audio-video.html');

    productCategoryPage.getTVSubcategoryButton().should('be.visible');
    productCategoryPage.getTVSubcategoryButton().click();
    cy.url().should('eq', 'https://www.datart.cz/televize.html');

    
    productPage.getAvailableOnStockCheckbox().should('exist').should('be.visible').check();
    productPage.getAvailableOnStockCheckbox().should('be.checked');
    cy.url().should('eq', 'https://www.datart.cz/televize/filter/v:-15:1');
    productPage.getSortByMostExpensiveButton().should('be.visible').click();
    cy.url().should('eq', 'https://www.datart.cz/televize/filter/o:4/v:-15:1');
    productPage.addItemToCart(0);
    productPage.addItemToCart(1);
    productPage.getCartButton().should('have.attr', 'data-total-price')
    .then((price) => {
      expect(Number(price)).to.be.equal(339980);
    });
    productPage.getCartButton().click();
    cy.url().should('eq', 'https://www.datart.cz/kosik');

    cartPage.getContinueButton().click();
    cy.url().should('eq', 'https://www.datart.cz/kosik/doprava-platba'); 

    cartPage.getPersonalPickupButton().click();
    cartPage.getRegionSelectDropdown().select(1);
    cartPage.getDeliveryPlacesRadiobutton().first().check();
    cartPage.getPayInPersonButton().should('be.visible').click();
    cartPage.getContinueButton().click();
    cy.url().should('eq', 'https://www.datart.cz/kosik/dorucovaci-udaje');

    cartPage.getContinueButton().click();
    cy.url().should('eq', 'https://www.datart.cz/kosik/shrnuti');
  });

});