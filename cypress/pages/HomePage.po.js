export class HomePage {
    
    getSearchButton() {
        return cy.get('input[name="q"]')
    }

    getTVCategoryButton() {
        return cy.get('a.main-menu-catalog-category-item[href="/tv-audio-video.html"]')
    }
    

  }