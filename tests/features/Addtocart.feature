
 Feature: Add products to cart

Scenario: Add Backpack to cart
Given user logged in saucedemo
When user adds Backpack to cart
And user open cart
Then Backpack should be added in cart