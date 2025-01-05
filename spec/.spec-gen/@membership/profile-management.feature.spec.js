// Generated from: spec/features/@membership/profile-management.feature
import { test } from "playwright-bdd";

test.describe('Profile Management', () => {

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Update personal information in profile', { tag: ['@membership'] }, async ({ Given, When, And, Then }) => { 
      await Given('I am logged into my account'); 
      await When('I navigate to the "Profile" section'); 
      await And('I update my personal information (e.g., name, email)'); 
      await And('I click on the "Save Changes" button'); 
      await Then('I see a confirmation message saying "Profile updated successfully"'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('View current profile information', { tag: ['@membership'] }, async ({ Given, When, Then }) => { 
      await Given('I am logged into my account'); 
      await When('I navigate to the "Profile" section'); 
      await Then('I see my current personal information displayed correctly'); 
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('spec/features/@membership/profile-management.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":9,"pickleLine":3,"skipped":true,"tags":["@membership"],"steps":[{"pwStepLine":10,"gherkinStepLine":4,"keywordOrig":"Given ","keywordType":"Context"},{"pwStepLine":11,"gherkinStepLine":5,"keywordOrig":"When ","keywordType":"Action"},{"pwStepLine":12,"gherkinStepLine":6,"keywordOrig":"And ","keywordType":"Action"},{"pwStepLine":13,"gherkinStepLine":7,"keywordOrig":"And ","keywordType":"Action"},{"pwStepLine":14,"gherkinStepLine":8,"keywordOrig":"Then ","keywordType":"Outcome"}]},
  {"pwTestLine":22,"pickleLine":10,"skipped":true,"tags":["@membership"],"steps":[{"pwStepLine":23,"gherkinStepLine":11,"keywordOrig":"Given ","keywordType":"Context"},{"pwStepLine":24,"gherkinStepLine":12,"keywordOrig":"When ","keywordType":"Action"},{"pwStepLine":25,"gherkinStepLine":13,"keywordOrig":"Then ","keywordType":"Outcome"}]},
]; // bdd-data-end