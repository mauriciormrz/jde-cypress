class LoginPage {


    getUserText() {
        return cy.get('#User');
    }

    getPasswordText() {
        return cy.get('#Password');
    }

    getSignInInput() {
        return cy.get("input[type='submit'][value='Sign In']");
    }
}

export default LoginPage;