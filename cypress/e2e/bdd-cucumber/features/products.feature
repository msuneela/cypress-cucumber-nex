Feature: Nexudus Products

Scenario: add and delete a product
    Given I am in Nexudus products homepage
    When I enter username and password
    When I naviagate to product list and select add product and select manual entry
    When I enter details and click save changes button
    Then I should see list and search for recently added product
    When I selct delete Product
    Then I shoul able to delete product and see success message