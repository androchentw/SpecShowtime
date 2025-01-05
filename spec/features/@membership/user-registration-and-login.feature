Feature: User Registration and Login

  Scenario: Register a new account
    Given I open the "Membership Management System" homepage
    When I click on "Sign Up"
    And I fill in the registration form with valid details
    And I submit the form
    Then I see a confirmation message saying "Account created successfully"

  Scenario: Log in with valid credentials
    Given I have an existing account
    When I enter my username and password on the login page
    And I click on the "Log In" button
    Then I am redirected to my dashboard

  Scenario: Log in with invalid credentials
    Given I have an existing account
    When I enter an incorrect password on the login page
    And I click on the "Log In" button
    Then I see an error message saying "Invalid username or password"
