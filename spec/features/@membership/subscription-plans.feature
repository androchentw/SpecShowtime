Feature: Subscription Plans

  Scenario: View available subscription plans
    Given I am on the "Membership Management System" homepage
    When I navigate to the "Subscription Plans" page
    Then I see a list of available plans with pricing and benefits

  Scenario: Select and subscribe to a plan
    Given I am logged into my account
    When I select a subscription plan from the list
    And I confirm my selection by clicking "Subscribe"
    Then I see a confirmation message saying "Subscription activated successfully"

  Scenario: View current subscription details
    Given I am logged into my account with an active subscription
    When I navigate to the "Subscription Details" page
    Then I see the details of my current subscription plan displayed correctly
