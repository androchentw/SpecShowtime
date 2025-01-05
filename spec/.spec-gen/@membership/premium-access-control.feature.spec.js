// Generated from: spec/features/@membership/premium-access-control.feature
import { test } from "playwright-bdd";

test.describe('Premium Access Control', () => {

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Access premium content as a subscribed member', { tag: ['@membership'] }, async ({ Given, When, Then }) => { 
      await Given('I am logged into my account with an active premium subscription'); 
      await When('I navigate to any premium content page (e.g., exclusive articles)'); 
      await Then('I can access and view the premium content without restrictions'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Restrict access for non-subscribers', { tag: ['@membership'] }, async ({ Given, When, Then }) => { 
      await Given('I am logged into my account without an active premium subscription'); 
      await When('I try to access any premium content page (e.g., exclusive articles)'); 
      await Then('I see a message saying "This content is available for premium members only"'); 
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('spec/features/@membership/premium-access-control.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":9,"pickleLine":3,"skipped":true,"tags":["@membership"],"steps":[{"pwStepLine":10,"gherkinStepLine":4,"keywordOrig":"Given ","keywordType":"Context"},{"pwStepLine":11,"gherkinStepLine":5,"keywordOrig":"When ","keywordType":"Action"},{"pwStepLine":12,"gherkinStepLine":6,"keywordOrig":"Then ","keywordType":"Outcome"}]},
  {"pwTestLine":20,"pickleLine":8,"skipped":true,"tags":["@membership"],"steps":[{"pwStepLine":21,"gherkinStepLine":9,"keywordOrig":"Given ","keywordType":"Context"},{"pwStepLine":22,"gherkinStepLine":10,"keywordOrig":"When ","keywordType":"Action"},{"pwStepLine":23,"gherkinStepLine":11,"keywordOrig":"Then ","keywordType":"Outcome"}]},
]; // bdd-data-end