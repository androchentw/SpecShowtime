Feature: Browse Coding Challenges

  Scenario: Filter challenges by category
    Given I open the "Coding Challenge System" homepage
    When I select the category "Algorithms"
    Then I see a list of challenges related to "Algorithms"

  Scenario: Filter challenges by difficulty level
    Given I open the "Coding Challenge System" homepage
    When I select the difficulty level "Beginner"
    Then I see a list of challenges with difficulty level "Beginner"
