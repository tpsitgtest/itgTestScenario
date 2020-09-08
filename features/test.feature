Feature: Amazon Test
    Scenario: Login into Amazon
        Given I open amazon in a browser
        When I click sign in button
        Then enter Email address
        Then click next
        Then enter Password
        Then Press next

    Scenario: Add Item into basket
        Given Search for Item
        When Enter Item Name
        Then expect Item to be displayed

    Scenario: Scenario name
        Given Select Item
        When 
        Then Click Add to basket
        Then Click drop to set amount to add to basket
        Then select 2 in dropdown menu
        Then Click add to basket
        Then result should be 3

    

    # Scenario Outline:
    #     Given I open amazon in a browser
    #     When I add two numbers <num1> and <num2>
    #     Then result should be correct <result>

    #     Examples:
    #         | num1 | num2 | result |
    #         | 4    | 2    | 6      |
    #         | 6    | 3    | 9      |