Feature: See start page of Espresso Addict

    Scenario: See the start page of the game 
        Given that I am on the start page of the game
        Then I should see the navbar "Health: ", "Money: " and "Espressos: "
        And I should see the picture of Cloud Forest Café
        And I should see a description of where I am
        And I should see a menu with 5 clickable buttons in the footer