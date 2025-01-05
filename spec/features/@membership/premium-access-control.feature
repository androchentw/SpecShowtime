Feature: Premium Access Control

  Scenario: Access premium content as a subscribed member
    Given I am logged into my account with an active premium subscription
    When I navigate to any premium content page (e.g., exclusive articles)
    Then I can access and view the premium content without restrictions

  Scenario: Restrict access for non-subscribers
    Given I am logged into my account without an active premium subscription
    When I try to access any premium content page (e.g., exclusive articles)
    Then I see a message saying "This content is available for premium members only"
