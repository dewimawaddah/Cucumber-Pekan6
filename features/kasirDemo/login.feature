Feature: Login Kasir

    Scenario Outline: As a user, I success login

        Given I am on the login page
        When I am input email "<email>"
        When I am input password "<password>"
        Then I am click button login

    Examples:
        | email              | password             | 
        | dewitest@gmail.com | 123456               | 
