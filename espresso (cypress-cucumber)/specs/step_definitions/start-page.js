import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the start page of the game', () => {
  cy.visit('/');
});

Then('I should see the navbar {string}, {string} and {string}', (health, money, espressocups) => {
  cy.get('section.health').contains(health).should('be.visible');
  cy.get('section.money').contains(money).should('be.visible');
  cy.get('section.espressocups').contains(espressocups).should('be.visible');
});

Then('I should see the picture of Cloud Forest Café', () => {
  cy.get('.big-image').should('be.visible');
});

Then('I should see a description of where I am', () => {
  cy.get('main p.description').should('be.visible');
});

Then('I should see a menu with 5 clickable buttons in the footer', () => {
  cy.get('footer menu.choices').should('be.visible');
  cy.get('footer menu.choices').each(($li) => {
    cy.wrap($li).click();
  });
});

