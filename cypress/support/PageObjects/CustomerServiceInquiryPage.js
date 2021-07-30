class CustomerServiceInquiryPage {

    getFormTitleText() {
        return cy.get('#jdeFormTitle0');
    }

    getCostumerPOInput(){
        return cy.get('#C0_19');
    }

    getPlantInput(){
        return cy.get('#C0_7');
    }

    getFindIcon(){
        return cy.get('#hc_Find');
    }


}

export default CustomerServiceInquiryPage;
