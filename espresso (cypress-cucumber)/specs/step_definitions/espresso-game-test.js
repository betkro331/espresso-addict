import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the game page', () => {
  cy.visit('/');
});

Then('I should have health 50 and 10 bucks', () => {
  cy.get('.health').find('.progress').find('.val').should('contain', '50');
  cy.get('.money').find('.progress').find('.val').should('contain', '10');
 });

Then('I see clickable choices in the footer', () => {
  cy.get('footer menu.choices').should('be.visible');
});

// I go inside the café
When('I click on Enter the café', () => {
  cy.get('ul>li').eq(0).click();
});

Then('I should be inside the café', () => {
  cy.get('img[src="imgs/inside-cafe.jpg"]').should('be.visible');
});

Then('I should see four option buttons', () => {
  cy.get('ul>li').eq(0).should('have.text', 'Exit the cafe');
  cy.get('ul>li').eq(1).should('have.text', 'Buy an espresso');
  cy.get('ul>li').eq(2).should('have.text', 'Wait');
  cy.get('ul>li').eq(3).should('have.text', 'Help');
});

Given('I am inside the cafe', () => {
  cy.get('img[src="imgs/inside-cafe.jpg"]').should('be.visible');
});

// Buy an espresso
When('I choose to {string}', (buyEspresso) => {
  cy.contains('li', buyEspresso).click();
});

Then('my status bar Health should increase by +10', () => {
  cy.get('.health').find('.progress').find('.val').should('contain', '60');
});

Then('my status bar Money should decrease by -5', () => {
  cy.get('.money').find('.progress').find('.val').should('contain', '5');
});

Then('my status bar Espressos should increase by +1', () => {
  cy.get('.espressocups').find('.progress').find('.val').should('contain', '1');
});

// Wait inside the café
When('I click the {string} button', (waitButton) => {
  cy.get('ul>li').eq(2).should('have.text', waitButton).click();
});

Then('I should see a text under the image', () => {
  cy.get('p.description').should('be.visible');
})

// Use some help inside the café
When('I click on button {string}', (helpButton) => {
  cy.get('ul>li').eq(3).should('have.text', helpButton).click();
});

Then('I should see an image, info text and a {string} button', (continueButton) => {
  cy.get('ul>li').should('have.text', continueButton);
  cy.get('img[src="imgs/help.jpg"]').should('be.visible');
});

Then('when I click {string}, I should go back to the last page', (continueButton) => {
  cy.get('ul>li').should('have.text', continueButton).click();
  cy.get('img[src="imgs/inside-cafe.jpg"]').should('be.visible');
});

// Exit the café
When('I leave the café by clicking {string}', (exitButton) => { 
  cy.get('ul>li').eq(0).should('have.text', exitButton).click();
});

Then('I am back outside the cafe', () => {
  cy.get('img[src="imgs/cloud-forest-cafe.jpg"]').should('be.visible');
});

// Go north to the empty street
When('I choose the button {string}', (goNorth) => { 
  cy.get('ul>li').eq(2).should('have.text', goNorth).click();
});

Then('I am on the empty street', () => {
  cy.get('img[src="imgs/street.jpg"]').should('be.visible');
});

Then('I should see four button alternatives', () => {
  cy.get('ul>li').eq(0).should('have.text', 'Wait');
  cy.get('ul>li').eq(1).should('have.text', 'Go south');
  cy.get('ul>li').eq(2).should('have.text', 'Go east');
  cy.get('ul>li').eq(3).should('have.text', 'Help');
});

// Enter the bar
When('I click on the {string} alternative', (goEast) => { 
  cy.get('ul>li').eq(2).should('have.text', goEast).click();
});

Then('I should be in a crowded bar', () => {
  cy.get('img[src="imgs/bar.jpg"]').should('be.visible');
});

Then('I should see the buttons {string}, {string}, and {string}', (waitButton, goWest, helpButton) => {
  cy.get('ul>li').eq(0).should('have.text', waitButton);
  cy.get('ul>li').eq(1).should('have.text', goWest)
  cy.get('ul>li').eq(2).should('have.text', helpButton)
});

// Wait in the crowded bar
When('I choose to click on {string}', (waitButton) => {
  cy.get('ul>li').eq(0).should('have.text', waitButton).click();
});

Then('I should see one of the following texts {string}:', (descTexts) => {
  cy.wait(3000);
    for (const descrText of descTexts) {
    if (cy.get('p.description').contains(descrText)) {
      return; // Exit the loop when the first matching text is found
    }
  }
  throw new Error('None of the expected texts were found in the description');
});

// Get a beer in the hipster bag
Given('I am in the crowded bar', () => {
  cy.get('img[src="imgs/bar.jpg"]').should('be.visible');
});

When('I press the wait button five times', () => {
  // loop 5 times
  for (let i = 0; i < 5; i++) {
    cy.get('menu ul>li').eq(0).click();
  }
});

Then('I should have a beer in my hipster bag', () => {
  cy.get('.bag-content').should('have.text', 'a can of beer');
});

// Go back from the empty street to outside the café
Given('I am back on the empty street', () => {
  cy.get('ul>li').eq(1).should('have.text', 'Go west').click();
  cy.get('img[src="imgs/street.jpg"]').should('be.visible');
});

When('I click on {string}', (goSouth) => {
   cy.get('ul>li').eq(1).should('have.text', goSouth).click();
});

Then('I am back outside the café', () => {
  cy.get('img[src="imgs/cloud-forest-cafe.jpg"]').should('be.visible');
})

// Go south to the country side
When('I click on Go south', () => {
  cy.get('ul>li').eq(3).should('have.text', 'Go south').click();
});

Then('I should be in the country side', () => {
  cy.get('img[src="imgs/country-side.jpg"]').should('be.visible');
});

Then('I have these buttons to choose from: {string}, {string}, {string}, and {string} to choose from', (waitButton, goWest, goNorth, help) => {
  cy.get('ul>li').eq(0).should('have.text', waitButton);
  cy.get('ul>li').eq(1).should('have.text', goWest);
  cy.get('ul>li').eq(2).should('have.text', goNorth);
  cy.get('ul>li').eq(3).should('have.text', help);
});

// Go west from country side to music scene
When('I choose to go West', () => {
  cy.get('ul>li').eq(1).should('have.text', 'Go west').click();

});

Then('I should be at a music scene', () => {
  cy.get('img[src="imgs/music-scene.jpg"]').should('be.visible');
});

Then('I should see the alternatives {string}, {string}, {string}, and {string} to choose from', (waitButton, goEest, help) => {
  cy.get('ul>li').eq(0).should('have.text', waitButton);
  cy.get('ul>li').eq(1).should('have.text', goEest);
  cy.get('ul>li').eq(2).should('have.text', help);
});

// Wait and wait at the music scene
Given('I am at the music scene', () => {
  cy.get('img[src="imgs/music-scene.jpg"]').should('be.visible');
})

When('I wait and wait and wait', () => {
  // loop 5 times
  for (let i = 0; i < 5; i++) {
    cy.get('menu ul>li').eq(0).click();
  }
});

Then('I should be able to choose to jam', () => {
  cy.get('.choices ul>li').eq(0).should('be.visible');
});

// Jam with the band and get a fiver
Given('I have clicked on button Jam with the band', () => {
  cy.wait(2000);
  cy.get('.choices ul>li').eq(0).click();
});

Then('I should get 5 more bucks in the status bar', () => {
  cy.get('.money').find('.progress').find('.val').should('contain', '10');
});

// Go from music scene back to the café
Given('I am still at the music scene', () => {
  cy.get('img[src="imgs/music-scene.jpg"]').should('be.visible');
})

When('I click on {string} to go east', (goEast) => {
  cy.get('ul>li').eq(1).should('have.text', goEast).click();
});

Then('I should be back in the country side', () => {
  cy.get('img[src="imgs/country-side.jpg"]').should('be.visible');
});

When('I keep on to the north', () => {
  cy.get('ul>li').eq(2).should('have.text', 'Go north').click();
});

Then('I will be back where I started, outside the café', () => {
  cy.get('img[src="imgs/cloud-forest-cafe.jpg"]').should('be.visible');
}
)








// When('I overhear the bartender\'s wish for a beer', () => {
//   cy.get('img[src="imgs/inside-cafe-barista-phone.jpg"]').should('be.visible');
// });

// Then('I give the beer to the barista', () => {
//   cy.get('ul>li').eq(1).should('have.text', 'Give beer to barista').click();
// });