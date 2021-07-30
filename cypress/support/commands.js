// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-iframe';


Cypress.Commands.add('switchToIframe',(iframe) =>{

    return cy 
    .get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap);
})


Cypress.Commands.add('getIframeBody', () => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    
    return cy
    .get('iframe[data-cy="the-frame"]')
    .its('0.contentDocument.body').should('not.be.empty')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    // https://on.cypress.io/wrap
    .then(cy.wrap)
  })

//   cy.log('getIframeBody');
//   return cy
//   .get('iframe[data-cy="the-frame"]' , {log:false})
//   .its('0.contentDocument.body', {log:false}).should('not.be.empty')
//   // wraps "body" DOM element to allow
//   // chaining more Cypress commands, like ".find(...)"
//   // https://on.cypress.io/wrap
//   .then((body) => cy.wrap(body, {log:false}))