// Generated from: spec/features/@membership/payment-integration.feature
import { test } from "playwright-bdd";

test.describe('Payment Integration', () => {

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Complete payment for a subscription plan', { tag: ['@membership'] }, async ({ Given, When, And, Then }) => { 
      await Given('I have selected a subscription plan to purchase'); 
      await When('I proceed to the payment gateway page'); 
      await And('I enter valid payment details (e.g., credit card information)'); 
      await And('I confirm the payment by clicking "Pay Now"'); 
      await Then('I see a confirmation message saying "Payment successful"'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Handle failed payment transaction', { tag: ['@membership'] }, async ({ Given, When, And, Then }) => { 
      await Given('I have selected a subscription plan to purchase'); 
      await When('I proceed to the payment gateway page'); 
      await And('I enter invalid payment details (e.g., expired card)'); 
      await And('I confirm the payment by clicking "Pay Now"'); 
      await Then('I see an error message saying "Payment failed. Please try again."'); 
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('spec/features/@membership/payment-integration.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":9,"pickleLine":3,"skipped":true,"tags":["@membership"],"steps":[{"pwStepLine":10,"gherkinStepLine":4,"keywordOrig":"Given ","keywordType":"Context"},{"pwStepLine":11,"gherkinStepLine":5,"keywordOrig":"When ","keywordType":"Action"},{"pwStepLine":12,"gherkinStepLine":6,"keywordOrig":"And ","keywordType":"Action"},{"pwStepLine":13,"gherkinStepLine":7,"keywordOrig":"And ","keywordType":"Action"},{"pwStepLine":14,"gherkinStepLine":8,"keywordOrig":"Then ","keywordType":"Outcome"}]},
  {"pwTestLine":22,"pickleLine":10,"skipped":true,"tags":["@membership"],"steps":[{"pwStepLine":23,"gherkinStepLine":11,"keywordOrig":"Given ","keywordType":"Context"},{"pwStepLine":24,"gherkinStepLine":12,"keywordOrig":"When ","keywordType":"Action"},{"pwStepLine":25,"gherkinStepLine":13,"keywordOrig":"And ","keywordType":"Action"},{"pwStepLine":26,"gherkinStepLine":14,"keywordOrig":"And ","keywordType":"Action"},{"pwStepLine":27,"gherkinStepLine":15,"keywordOrig":"Then ","keywordType":"Outcome"}]},
]; // bdd-data-end