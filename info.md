## Changes 231123 to be able to run Github Actions
"Espresso Addict har ingen riktig ‘server’ som startar den, under utvecklingen av testerna har vi använt Live Server-tillägget för Visual Studio Code, men nu när vi behöver starta på den med den tillfälliga servern vi kör med GitHub Actions får vi lägga till en ‘riktig’ server, genom att installera express: npm install express"

### To start the tests
open one shell: npm run start
open another shell: npm run test-ui



### cypress.io (om Node.js finns på datorn)
- installera med npm install

### Correct URL
- change url in BaseURL

### Autogenerera step definitions
- npm run make-steps

### Kör tester i terminalen/GUI:t
- npm test
- npm run test-ui

### To open/start
Open http://127.0.0.1:5500/index.html in Firefox from 
VSC-project espresso-accict/index.html with LiveServer
(2 VSC-projects)

öppna index.html med LiveServer!

### Mock randomness?
By temporarily replacing the Math.random function with a function that always returns the same number? 


### Note to self on valid methods
cy.get('ul>li').eq(0);
cy.get('ul li:first-child');

"Both these methods are valid ways, and depends on personal preference and context. The first selects the child element li by index, the second approaches the css-selector 'first-child'." 

### Tested examples
cy.get('ul.choices li:contains("Enter the cafe")').should('be.visible');
cy.get('section.health.progress.good.val').should('contain', '50');
When('I see the buttons {string}', (goNorth) => {
  cy.get('ul.choices li').eq(2).should('contain.text', goNorth).should('be.visible');
});
