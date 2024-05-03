
import ApiLogin from '../../integration/pages/ApiLogin.cy';

describe('API Tests', () => {
    const api = new ApiLogin();

    it('Login should display message that User Exists', () => {
        api.loginValidCredentials().then((response) => {
            expect(response.status).to.eq(200); 
           
            const parsedBody = JSON.parse(response.body);
            expect(parsedBody.responseCode).to.eql(200);
            expect(parsedBody.message).to.eql("User exists!");   
        });
    });
});