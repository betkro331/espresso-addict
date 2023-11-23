Feature: Espresso Addict Game
  As a player, I want to buy 5 espressos
  so that I can satisfy my espresso addiction

  Scenario: Start the game
    Given I am on the game page 
    Then I should have health 50 and 10 bucks
    And I see clickable choices in the footer

  Scenario: Enter the café from the start page
    Given I am on the game page
    When I click on Enter the café
    Then I should be inside the café
    And I should see four option buttons

  Scenario: Buy an espresso and feel a little better
    Given I am inside the cafe
    When I choose to "Buy an espresso"
    Then my status bar Health should increase by +10
    And my status bar Money should decrease by -5
    And my status bar Espressos should increase by +1

  Scenario: Wait inside the cafe
    Given I am inside the cafe
    When I click the "Wait" button
    Then I should see a text under the image

  Scenario: Use Help inside the cafe
    Given I am inside the cafe
    When I click on button "Help"
    Then I should see an image, info text and a "Continue" button
    And when I click "Continue", I should go back to the last page

  Scenario: Exit the cafe
    Given I am inside the cafe
    When I leave the café by clicking "Exit the cafe"
    Then I am back outside the cafe

  Scenario: Go North to the empty street
    Given I am back outside the cafe
    When I choose the button "Go north"
    Then I am on the empty street
    And I should see four button alternatives

  Scenario: Go east and into the bar
    Given I am on the empty street
    When I click on the "Go east" alternative
    Then I should be in a crowded bar
    And I should see the buttons "Wait", "Go west", and "Help"

  Scenario: Wait in the crowded bar
    When I choose to click on "Wait"
    Then I should see one of the following texts "descTexts":
      | descrTexts                                  |
      | You wait. Beer, beer, beer...               |
      | It's kind of nice here. But no coffee...    |
      | The bartender offers you a beer for free... |

  Scenario: Get the beer in my hipster bag
    Given I am in the crowded bar
    When I press the wait button five times
    Then I should have a beer in my hipster bag
    # And my status bar should increase by +2

  Scenario: Go South from the empty street
    Given I am back on the empty street
    When I click on "Go south"
    Then I am back outside the café

  Scenario: Go South to the country side
    Given I am back outside the cafe
    When I click on Go south
    Then I should be in the country side
    And I have these buttons to choose from: "Wait", "Go west", "Go north", and "Help" to choose from

  Scenario: Go west from the country side to the music scene
    Given I should be in the country side
    When I choose to go West
    Then I should be at a music scene
    And I should see the buttons "Wait", "Go east", and "Help"

  Scenario: Wait at the music scene
    Given I am at the music scene
    When I wait and wait and wait
    Then I should be able to choose to jam

  Scenario: Jam with the band and get a fiver
    Given I am at the music scene 
    And I have clicked on button Jam with the band
    Then I should get 5 more bucks in the status bar

  Scenario: Go from the music scene back to the café
    Given I am still at the music scene
    When I click on "Go east" to go east
    Then I should be back in the country side
    When I keep on to the north
    Then I will be back where I started, outside the café

  # Scenario: Win the game



