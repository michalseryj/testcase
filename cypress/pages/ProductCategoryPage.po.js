import { HomePage } from "./HomePage.po"

export class ProductCategoryPage extends HomePage {
    
    getTVSubcategoryButton() {
        return cy.contains('span.category-tree-title', 'Televize').parents('a')
    }     

  }