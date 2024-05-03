import ApiSearchProducts from '../../integration/pages/ApiSearchProducts.cy';

describe('API Tests', () => {
    const api = new ApiSearchProducts();

    it('Should search product top', () => {
        api.createSearchProduct().then((response) => {
            expect(response.status).to.eq(200); 

        const parsedBody = JSON.parse(response.body);
            expect(parsedBody.responseCode).to.eql(200);
        });
    });
});