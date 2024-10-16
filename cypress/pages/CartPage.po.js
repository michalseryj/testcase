import { HomePage } from "./HomePage.po"

export class CartPage extends HomePage {
    
    getContinueButton() {
        return cy.get('button.btn.btn-continue').contains('Pokračovat »');
    }

    getPersonalPickupButton() {
        return cy.get('ul.title-box .transport-item[data-group="pickup"]');
    }

    getRegionSelectDropdown() {
        return cy.get('#basket-pickup-select-region');
    }
    
    getPayInPersonButton() {
        return cy.get('#payment-item-1 input[type="radio"]');
    }

    getDeliveryPlacesRadiobutton() {
        return cy.get('#collapse0 input[type="radio"]');
    }

  }

