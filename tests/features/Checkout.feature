
Feature: Checkout section

Scenario: Successfull Checkout

Given user logged into saucedemo
And user add Backpack to cart
And Product available in cart
When user enter Checkout details
When user enter finish button
Then order confirmation button should be displayed

