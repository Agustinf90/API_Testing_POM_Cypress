class ApiLogin {
    //constructor
    constructor() {
        this.apiUrl = Cypress.env('URL');
        this.endpoint = Cypress.env('LOGIN');
        this.requestBody = { email: Cypress.env('EMAIL'),
        password:  Cypress.env('PASSWORD') };// Asegúrate de que esta línea esté correctamente indentada
    }
    //method
    loginValidCredentials() {
        return cy.request({
            method: 'POST',
            url: `${this.apiUrl}/${this.endpoint}`,
            form: true,
            body: this.requestBody
        });
    }
}

export default ApiLogin;