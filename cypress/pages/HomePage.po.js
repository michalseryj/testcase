export class HomePage {

    getLoginButton() {
        return cy.contains('span', 'Přihlásit')
    }

    getEmailTextField() {
        return cy.get('#frm-login')
    }

    getPasswordTextField() {
        return cy.get('#frm-password')
    }

    getConfirmLoginButton() {
        return cy.contains('button.btn-login', 'Přihlásit')
    }

    getAcceptPopupButton() {
        return cy.get('#c-p-bn')
    }
    
    getSearchTextField() {
        return cy.get('input[name="q"]')
    }

    getTVCategoryButton() {
        return cy.get('a.main-menu-catalog-category-item[href="/tv-audio-video.html"]')
    }
    
    acceptCookies (){
        this.getAcceptPopupButton().click();
    }

    login(){
        this.getLoginButton().click();
        this.getEmailTextField().type('renel27601@paxnw.com');
        this.getPasswordTextField().type('renel27601');
        this.getConfirmLoginButton().click();
    }

  }