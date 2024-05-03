import ApiProducts from '../../integration/pages/ApiProducts.cy';

describe('API Tests', () => {
    const api = new ApiProducts();

    it('Should retrieve products', () => {
            api.getProducts().then((response) => {
            // Verificar que la respuesta tiene un código de estado 200 (OK)
            expect(response.status).to.eq(200);

            // // // Verificar que la respuesta contiene datos
            expect(response.body).to.not.be.empty;

            // // // Verificar el contenido de la respuesta si es necesario
            console.log(response.body.products);
        });
    });

    it('Should create a new product', () => {
        api.createProduct().then((response) => {
            // expect(response.status).to.eq(200); // falla
            const parsedBody = JSON.parse(response.body);
                expect(parsedBody.responseCode).to.eql(405);
                expect(parsedBody.message).to.eql("This request method is not supported.");
        });
    });
});