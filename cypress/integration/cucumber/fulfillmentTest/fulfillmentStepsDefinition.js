import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import HomePage from "../../../support/PageObjects/HomePage";
import LoginPage from '../../../support/PageObjects/LoginPage';
import CustomerServiceInquiryPage from "../../../support/PageObjects/CustomerServiceInquiryPage";


const homePage = new HomePage();
const loginPage = new LoginPage();
const customerServiceInquiryPage = new CustomerServiceInquiryPage();


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

Given('Primera prueba', () => {


    // launch the application
    cy.visit("https://jqueryui.com/draggable/");
    // load the frame
    cy.frameLoaded('.demo-frame');
    //shift the focus to frame
    cy.iframe().find("#draggable").then(function (txt) {
        const txtframe = txt.text();
        //assertion to verify text
        expect(txtframe).to.contains('Drag me around');
        cy.log(txtframe);
    })



})

Given('I login to the JDE platform with user {string} and password {string}', (user, password) => {

    cy.visit(Cypress.env('url'));

    loginPage.getUserText().clear().type(user);
    loginPage.getPasswordText().clear().type(password);
    loginPage.getSignInInput().click();

    homePage.getUserName().should('contain', user);
})


When('I verify the creation of the order {string} in the branch {string}', (order, plant) => {

    homePage.getNavigatorIcon().click();
    homePage.getFastPathBox().click().type('p4210');


    homePage.getFastPathButton().click({ shiftKey: true, });

    //// load the frame
    //cy.frameLoaded('#innerRCUX > iframe#e1menuAppIframe');
    ////shift the focus to frame
    //cy.iframe().find("#divTC0_8 > span.FieldLabel").then(function (txt) {
    //        const txtframe = txt.text();
    //        //assertion to verify text
    //        expect(txtframe).to.contains('Order Number');
    //        cy.log(txtframe);
    //});
    //cy.pause();

    //customerServiceInquiryPage.getFormTitleText().should('eq', 'Customer Service Inquiry');
    //customerServiceInquiryPage.getCostumerPOInput().clear().type(order);
    //customerServiceInquiryPage.getPlantInput().clear().type(plant);
    //customerServiceInquiryPage.getFindIcon().click();

    const iframe = cy.get('#e1MFastpathForm')
        .its('#divTC0_8 > span.FieldLabel')
        .should('not.exist')
        .then(cy.wrap);
    iframe.click();

    //cy.frameLoaded('#fastPathButton');
    //cy.iframe().click();

    //cy.switchToIframe('#fastPathButton').click();

    //#e1MFastpathForm a#fastPathButton

    //homePage.getFastPathButton().click({ shiftKey: true, });
    //
    //customerServiceInquiryPage.getFormTitleText().should('eq', 'Customer Service Inquiry');
    //customerServiceInquiryPage.getCostumerPOInput().clear().type(order);
    //customerServiceInquiryPage.getPlantInput().clear().type(plant);
    //customerServiceInquiryPage.getFindIcon().click();


    //cy.get('#webTree > #e1MMenuRoot > #fastPathContainer > #e1MFastpathForm > #TE_FAST_PATH_BOX').click()
    //cy.get('#webTree > #e1MMenuRoot > #fastPathContainer > #e1MFastpathForm > #TE_FAST_PATH_BOX').type('p4210')
    //cy.get('#webTree > #e1MMenuRoot > #fastPathContainer > #e1MFastpathForm > #fastPathButton').click()

})

And('I Consolidate the orders through the user interface of JDE - {string}', (user_interface) => {

})
