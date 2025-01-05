Feature: Validate Challenge Solutions

  Scenario: Submit a correct solution for validation
    Given I have written a correct solution for a coding challenge
    When I click on the "Submit" button
    Then I see a message saying "Your solution is correct!"

  Scenario: Submit an incorrect solution for validation
    Given I have written an incorrect solution for a coding challenge
    When I click on the "Submit" button
    Then I see feedback indicating which test cases failed and why

  Scenario: View detailed feedback after submission
    Given my submitted solution failed some test cases
    When I click on the "View Feedback" link
    Then I see detailed feedback for each failed test case, including input, expected output, and actual output
