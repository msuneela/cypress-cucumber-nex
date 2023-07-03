
Feature: Nexudus Login
Scenario: Invalid username and password
    Given I am in Nexudus homepage
    When I enter invalid username and password
    Then I should see error message
Scenario: valid username and Password
    Given I am in Nexudus homepage
    When I enter valid username and password
    Then I should see Dashboard page
