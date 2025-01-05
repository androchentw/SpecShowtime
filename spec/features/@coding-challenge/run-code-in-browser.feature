Feature: Run Code in Browser

  Scenario: Execute code in a cloud-based environment
    Given I open a coding challenge titled "Find the Longest Substring"
    When I write Python code in the editor provided
    And I click on the "Run" button
    Then I see the output of my code execution displayed below the editor

  Scenario: Handle errors during code execution
    Given I write invalid Python code in the editor
    When I click on the "Run" button
    Then I see an error message indicating what went wrong with my code
