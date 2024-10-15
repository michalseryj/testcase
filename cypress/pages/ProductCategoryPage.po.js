export class ProductCatergoryPage extends HomePage {
    
    getSearchButton() {
        return cy.get('input[name="q"]')
    }     

    }