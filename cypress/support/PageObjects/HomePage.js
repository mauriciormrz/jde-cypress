class HomePage {

    getUserName() {
        return cy.get('#usernameDiv');
    }

    getNavigatorIcon() {
        return cy.get('#drop_mainmenu');
    }

    getFastPathBox() {
        return cy.get('#TE_FAST_PATH_BOX');
    }

    getFastPathButton() {
        return cy.get('#fastPathButton');
    }
}

export default HomePage;


