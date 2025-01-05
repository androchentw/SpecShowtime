// Generated from: spec/features/@membership/subscription-plans.feature
import { test } from "playwright-bdd";

test.describe('Subscription Plans', () => {

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('View available subscription plans', { tag: ['@membership'] }, async ({ Given, When, Then }) => { 
      await Given('I am on the "Membership Management System" homepage'); 
      await When('I navigate to the "Subscription Plans" page'); 
      await Then('I see a list of available plans with pricing and benefits'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Select and subscribe to a plan', { tag: ['@membership'] }, async ({ Given, When, And, Then }) => { 
      await Given('I am logged into my account'); 
      await When('I select a subscription plan from the list'); 
      await And('I confirm my selection by clicking "Subscribe"'); 
      await Then('I see a confirmation message saying "Subscription activated successfully"'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('View current subscription details', { tag: ['@membership'] }, async ({ Given, When, Then }) => { 
      await Given('I am logged into my account with an active subscription'); 
      await When('I navigate to the "Subscription Details" page'); 
      await Then('I see the details of my current subscription plan displayed correctly'); 
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('spec/features/@membership/subscription-plans.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":9,"pickleLine":3,"skipped":true,"tags":["@membership"],"steps":[{"pwStepLine":10,"gherkinStepLine":4,"keywordOrig":"Given ","keywordType":"Context"},{"pwStepLine":11,"gherkinStepLine":5,"keywordOrig":"When ","keywordType":"Action"},{"pwStepLine":12,"gherkinStepLine":6,"keywordOrig":"Then ","keywordType":"Outcome"}]},
  {"pwTestLine":20,"pickleLine":8,"skipped":true,"tags":["@membership"],"steps":[{"pwStepLine":21,"gherkinStepLine":9,"keywordOrig":"Given ","keywordType":"Context"},{"pwStepLine":22,"gherkinStepLine":10,"keywordOrig":"When ","keywordType":"Action"},{"pwStepLine":23,"gherkinStepLine":11,"keywordOrig":"And ","keywordType":"Action"},{"pwStepLine":24,"gherkinStepLine":12,"keywordOrig":"Then ","keywordType":"Outcome"}]},
  {"pwTestLine":32,"pickleLine":14,"skipped":true,"tags":["@membership"],"steps":[{"pwStepLine":33,"gherkinStepLine":15,"keywordOrig":"Given ","keywordType":"Context"},{"pwStepLine":34,"gherkinStepLine":16,"keywordOrig":"When ","keywordType":"Action"},{"pwStepLine":35,"gherkinStepLine":17,"keywordOrig":"Then ","keywordType":"Outcome"}]},
]; // bdd-data-end