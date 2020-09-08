Feature: Amazon Test
    Scenario: Login into Amazon
        Given I open amazon in a browser
        When I click sign in button
        And enter Email address
        And I click continue
        And I enter Password
        And Press continue
        Then User is signed into amazon

    Scenario: Add Item into basket
        Given Search for Item
        When Enter Item Name
        Then expect Item to be displayed

    Scenario: Ensure Currect value is in basket
        Given Item is Displayed in reulsts list
        When I click on the
        Then Click Add to basket
        Then Click drop to set amount to add to basket
        Then select 2 in dropdown menu
        Then Click add to basket
        Then result should be 3
