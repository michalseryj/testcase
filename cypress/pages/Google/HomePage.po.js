export class HomePage {

    getSearchField() {
        return cy.get('textarea[name="q"]')
    }

    getCookieConsentAcceptButton() {
        return cy.get('.QS5gu.sy4vM').eq(1)
    }

    searchForString(text) {
        this.getSearchField().type(text).type('{enter}')
      }
    }