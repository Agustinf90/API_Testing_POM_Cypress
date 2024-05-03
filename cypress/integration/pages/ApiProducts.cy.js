class ApiProducts {
    constructor() {
        this.apiUrl = Cypress.env('URL');
        this.endpoint = Cypress.env('PRODUCTS');
    }

    getProducts() {
        return cy.request({
            method: 'GET',
            url: `${this.apiUrl}/${this.endpoint}`
        });
    }

    createProduct() {
        return cy.request({
            method: 'POST',
            url: `${this.apiUrl}/${this.endpoint}`
        });
    }
}

export default ApiProducts;
