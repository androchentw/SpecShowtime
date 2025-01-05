Feature: Membership Insights for Admins

  Scenario: View reports on active members and subscriptions
    Given I am logged in as an admin user
    When I navigate to the "Membership Reports" section in the admin dashboard
    Then I see statistics on active members, subscriptions, and revenue displayed clearly

  Scenario: Generate detailed reports for analysis
    Given I am logged in as an admin user
    When I select a specific date range in the "Membership Reports" section
    And click on "Generate Report"
    Then a detailed report is generated showing membership trends and revenue breakdowns for that period

  Scenario: Export reports for offline analysis
    Given a report is generated in the admin dashboard
    When I click on “Export”
    Then Report should be downloaded as CSV
    