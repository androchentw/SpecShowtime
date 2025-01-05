// Generated from: spec/features/@membership/membership-insights-for-admins.feature
import { test } from "playwright-bdd";

test.describe('Membership Insights for Admins', () => {

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('View reports on active members and subscriptions', { tag: ['@membership'] }, async ({ Given, When, Then }) => { 
      await Given('I am logged in as an admin user'); 
      await When('I navigate to the "Membership Reports" section in the admin dashboard'); 
      await Then('I see statistics on active members, subscriptions, and revenue displayed clearly'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Generate detailed reports for analysis', { tag: ['@membership'] }, async ({ Given, When, And, Then }) => { 
      await Given('I am logged in as an admin user'); 
      await When('I select a specific date range in the "Membership Reports" section'); 
      await And('click on "Generate Report"'); 
      await Then('a detailed report is generated showing membership trends and revenue breakdowns for that period'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Export reports for offline analysis', { tag: ['@membership'] }, async ({ Given, When, Then }) => { 
      await Given('a report is generated in the admin dashboard'); 
      await When('I click on “Export”'); 
      await Then('Report should be downloaded as CSV'); 
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('spec/features/@membership/membership-insights-for-admins.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":9,"pickleLine":3,"skipped":true,"tags":["@membership"],"steps":[{"pwStepLine":10,"gherkinStepLine":4,"keywordOrig":"Given ","keywordType":"Context"},{"pwStepLine":11,"gherkinStepLine":5,"keywordOrig":"When ","keywordType":"Action"},{"pwStepLine":12,"gherkinStepLine":6,"keywordOrig":"Then ","keywordType":"Outcome"}]},
  {"pwTestLine":20,"pickleLine":8,"skipped":true,"tags":["@membership"],"steps":[{"pwStepLine":21,"gherkinStepLine":9,"keywordOrig":"Given ","keywordType":"Context"},{"pwStepLine":22,"gherkinStepLine":10,"keywordOrig":"When ","keywordType":"Action"},{"pwStepLine":23,"gherkinStepLine":11,"keywordOrig":"And ","keywordType":"Action"},{"pwStepLine":24,"gherkinStepLine":12,"keywordOrig":"Then ","keywordType":"Outcome"}]},
  {"pwTestLine":32,"pickleLine":14,"skipped":true,"tags":["@membership"],"steps":[{"pwStepLine":33,"gherkinStepLine":15,"keywordOrig":"Given ","keywordType":"Context"},{"pwStepLine":34,"gherkinStepLine":16,"keywordOrig":"When ","keywordType":"Action"},{"pwStepLine":35,"gherkinStepLine":17,"keywordOrig":"Then ","keywordType":"Outcome"}]},
]; // bdd-data-end