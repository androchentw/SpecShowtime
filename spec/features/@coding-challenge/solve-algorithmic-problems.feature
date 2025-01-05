Feature: Solve Algorithmic Problems

  Scenario: Access Python-based algorithm challenges
    Given I open the "Coding Challenge System" homepage
    When I navigate to the "Algorithms" category
    Then I see a list of Python-based algorithm challenges

  Scenario: Open a specific algorithm challenge
    Given I am on the "Algorithms" category page
    When I click on the challenge titled "Find the Longest Substring"
    Then I see the challenge details, including problem description and input/output examples
