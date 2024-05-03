class ApiProducts {
    constructor() {
        this.apiUrl = Cypress.env('URL');
        this.endpoint = Cypress.env('SEARCH_PRODUCTS');
        this.requestBody = { search_product: 'top' }; // Asegúrate de que esta línea esté correctamente indentada
    }

    // // Método para obtener productos
    // getProducts() {
    //     return cy.request({
    //         method: 'GET',
    //         url: `${this.apiUrl}/${this.endpoint}`
    //     });
    // }

    // Método para crear un producto
    createSearchProduct() {
        return cy.request({
            method: 'POST',
            url: `${this.apiUrl}/${this.endpoint}`,
            form: true,
            body: this.requestBody
        });
    }
}

export default ApiProducts;
