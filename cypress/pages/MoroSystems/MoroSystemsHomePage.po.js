export class MoroSystemsHomePage {
    
    getAcceptCookiesButton() {
        return cy.get('#cookiescript_accept')
    }
    
    getCareerButton() {
        return cy.contains('a', 'Kariéra')
    }

  }