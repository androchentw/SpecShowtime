Feature: Payment Integration

  Scenario: Complete payment for a subscription plan
    Given I have selected a subscription plan to purchase
    When I proceed to the payment gateway page
    And I enter valid payment details (e.g., credit card information)
    And I confirm the payment by clicking "Pay Now"
    Then I see a confirmation message saying "Payment successful"

  Scenario: Handle failed payment transaction
    Given I have selected a subscription plan to purchase
    When I proceed to the payment gateway page
    And I enter invalid payment details (e.g., expired card)
    And I confirm the payment by clicking "Pay Now"
    Then I see an error message saying "Payment failed. Please try again."
