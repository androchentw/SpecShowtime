Feature: Profile Management

  Scenario: Update personal information in profile
    Given I am logged into my account
    When I navigate to the "Profile" section
    And I update my personal information (e.g., name, email)
    And I click on the "Save Changes" button
    Then I see a confirmation message saying "Profile updated successfully"

  Scenario: View current profile information
    Given I am logged into my account
    When I navigate to the "Profile" section
    Then I see my current personal information displayed correctly
