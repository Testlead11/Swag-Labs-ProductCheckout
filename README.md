SauceDemo E-Commerce Automation Framework

Project Overview

This is a Playwright automation practice project developed using TypeScript, Cucumber BDD, and Page Object Model (POM).

The framework automates key e-commerce workflows of the "SauceDemo (Swag Labs)" application, including user login, product selection, adding products to the cart, cart validation, checkout, and order confirmation.

The framework is designed using reusable page objects and utility methods to improve "maintainability, readability, and reusability of the automation code.

 Technology Stack

 Technology          Usage                    
 ------------------  ------------------------ 
 Playwright         - Web UI Automation        
 TypeScript         - Programming Language     
 Cucumber           - BDD Framework            
 Page Object Model  - Framework Design Pattern 
 Node.js            - Runtime Environment      
 npm                - Package Management       
 Visual Studio Code - Development Environment  
 Git & GitHub       - Version Control          

Application: SauceDemo / Swag Labs

The application is an e-commerce web application used for practicing automated functional testing.

 Automated Test Scenarios

 1. Login

* Navigate to the SauceDemo application
* Enter valid username
* Enter valid password
* Click the Login button
* Verify that the Products page is displayed

2. Add Product to Cart

* Login to the application
* Select Sauce Labs Backpack
* Add the product to the cart
* Open the cart
* Verify that the product is available in the cart

 3. Checkout

* Login to the application
* Add Sauce Labs Backpack to the cart
* Open the cart
* Proceed to checkout
* Enter checkout details
* Continue to the checkout overview
* Click Finish
* Verify the order confirmation message

Framework Structure
 
Swag-Labs-ProductCheckout
│
├── Config/
│   └── config.json
│
├── tests/
│   │
│   ├── features/
│   │   ├── Login.feature
│   │   ├── Addtocart.feature
│   │   └── Checkout.feature
│   │
│   ├── StepDefinations/
│   │   ├── Loginsteps.ts
│   │   ├── Productsteps.ts
│   │   ├── Cartsteps.ts
│   │   ├── Checkoutsteps.ts
│   │   └── Basepage.ts
│   │
│   ├── pages/
│   │   ├── LoginPage.ts
│   │   ├── ProductPage.ts
│   │   ├── CartPage.ts
│   │   └── CheckoutPage.ts
│   │
│   └── Utils/
│       ├── Commonutils.ts
│       └── Assertutil.ts
│
├── reports/
│   └── cucumber-report.html
│
├── cucumber.js
├── playwright.config.ts
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

 Framework Components

 Page Object Model

The framework follows the **Page Object Model (POM)** design pattern.

Each application page has a separate page class containing its locators and page-specific actions.

Examples:

* `LoginPage.ts` – Handles login functionality
* `ProductPage.ts` – Handles product-related actions
* `CartPage.ts` – Handles cart functionality
* `CheckoutPage.ts` – Handles checkout functionality

This approach helps reduce code duplication and makes the framework easier to maintain.

Cucumber Feature Files

Cucumber feature files contain test scenarios in Gherkin syntax using:

* Given
* When
* Then
* And

Example:

gherkin
Feature: Checkout functionality

Scenario: Successful Checkout

Given user logged into saucedemo
And user add Backpack to cart
And Product available in cart
When user enter Checkout details
And user enter finish button
Then order confirmation message should be displayed

 Step Definitions:-

Step-definition files connect the Gherkin steps in the feature files with the corresponding TypeScript automation code.

For example:

typescript
Given('user logged into saucedemo', async () => {
    // Login implementation
});


 Common Utilities

`Commonutils.ts` contains reusable Playwright operations used across the framework.

Examples include:

* Browser initialization
* Page creation
* Navigation
* Element interaction
* Entering values
* Clicking elements
* Retrieving element text

Reusable utility methods help avoid duplicate automation code.



 Assertion Utility

`Assertutil.ts` contains reusable assertion methods for validating expected application behavior.

The framework uses Playwright's built-in `expect` assertions for validations such as:

typescript
await expect(locator).toBeVisible();


typescript
await expect(locator).toHaveText("Products");

 Playwright Features Used

The project demonstrates practical usage of Playwright features including:

* `Page`
* `Locator`
* `getByRole()`
* `getByText()`
* XPath selectors
* `click()`
* `fill()`
* `toBeVisible()`
* `toHaveText()`
* Browser and page management
* Playwright auto-waiting


 Prerequisites

Before running the project, install:

* Node.js
* npm
* Visual Studio Code

Check Node.js:

```bash
node --version
```

Check npm:

```bash
npm --version
```

---

 Clone the Repository

```bash
git clone https://github.com/Ajitham21/Swag-Labs-ProductCheckout.git
```

Navigate to the project directory:

```bash
cd Swag-Labs-ProductCheckout
```

---
 Install Dependencies

Install the project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

 Execute Tests

Run the complete Cucumber test suite:

```bash
npx cucumber-js
```

---

 Run a Specific Feature

To run the Login feature:

```bash
npx cucumber-js tests/features/Login.feature
```

To run the Add to Cart feature:

```bash
npx cucumber-js tests/features/Addtocart.feature
```

To run the Checkout feature:

```bash
npx cucumber-js tests/features/Checkout.feature
```

---
 Execute Tests Using Tags

Test scenarios can be tagged in Cucumber feature files.

Example:

```gherkin
@LoginTest
Scenario: Successful login
```

Run the tagged scenario using:

```bash
npx cucumber-js --tags "@LoginTest"
```

---

 Test Reports

The framework is configured to generate a **Cucumber HTML report**.

The report is generated in:

```text
reports/cucumber-report.html
```

After test execution, open the HTML report in a browser to review the test execution results.

---

 Test Execution Flow

The framework follows this execution flow:

text
Feature File
     ↓
Step Definition
     ↓
Page Object
     ↓
Common Utility
     ↓
Playwright
     ↓
Application
     ↓
Assertion
     ↓
Test Result / Report
```

---

 Framework Benefits

* **Page Object Model** for better maintainability
* **Cucumber BDD** for readable test scenarios
* **Reusable utility methods** to reduce duplicate code
* **Playwright assertions** for validation
* **TypeScript** for type safety and maintainable code
* Clear separation between feature files, step definitions, page objects, and utilities
* Scalable structure for adding additional application workflows

---

 Future Enhancements

The framework can be enhanced further by implementing:

* Data-driven testing
* Multiple browser execution
* Screenshot capture on test failure
* Video and trace collection
* CI/CD integration using Jenkins or GitHub Actions
* Parallel test execution
* Additional test scenarios
* Enhanced test reporting



 Project Purpose

This project was created as a hands-on Playwright automation practice project to gain practical experience in:

* Playwright
* TypeScript
* Cucumber BDD
* Page Object Model
* Test automation framework development
* Web UI automation
* Assertions and test reporting

The project demonstrates the automation of an e-commerce application using a structured and reusable test automation framework.
