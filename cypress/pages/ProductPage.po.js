import { HomePage } from "./HomePage.po"

export class ProductPage extends HomePage {
    
    getAvailableOnStockCheckbox() {
        return cy.get('input[type="checkbox"][name="param[-15][]"][value="1"]')
    }
    
    getSortByMostExpensiveButton(){
        return cy.get('a[data-lb-name="Nejdražší"]')
    }

    getAddToCartbutton(){
        return cy.get('button[data-lb-action="buy"]')
    }

    getClosePopupButton(){
        return cy.get('button.close')
    }

    getCartButton(){
        return cy.get('a.head-cart.header-menu-item')
    }

    addItemToCart (sequence_number){
        this.getAddToCartbutton().eq(sequence_number).click();
        this.getClosePopupButton().click();
    }

  }