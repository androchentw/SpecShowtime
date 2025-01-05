// Generated from: spec/features/@membership/user-registration-and-login.feature
import { test } from "playwright-bdd";

test.describe('User Registration and Login', () => {

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Register a new account', { tag: ['@membership'] }, async ({ Given, When, And, Then }) => { 
      await Given('I open the "Membership Management System" homepage'); 
      await When('I click on "Sign Up"'); 
      await And('I fill in the registration form with valid details'); 
      await And('I submit the form'); 
      await Then('I see a confirmation message saying "Account created successfully"'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Log in with valid credentials', { tag: ['@membership'] }, async ({ Given, When, And, Then }) => { 
      await Given('I have an existing account'); 
      await When('I enter my username and password on the login page'); 
      await And('I click on the "Log In" button'); 
      await Then('I am redirected to my dashboard'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Log in with invalid credentials', { tag: ['@membership'] }, async ({ Given, When, And, Then }) => { 
      await Given('I have an existing account'); 
      await When('I enter an incorrect password on the login page'); 
      await And('I click on the "Log In" button'); 
      await Then('I see an error message saying "Invalid username or password"'); 
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('spec/features/@membership/user-registration-and-login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":9,"pickleLine":3,"skipped":true,"tags":["@membership"],"steps":[{"pwStepLine":10,"gherkinStepLine":4,"keywordOrig":"Given ","keywordType":"Context"},{"pwStepLine":11,"gherkinStepLine":5,"keywordOrig":"When ","keywordType":"Action"},{"pwStepLine":12,"gherkinStepLine":6,"keywordOrig":"And ","keywordType":"Action"},{"pwStepLine":13,"gherkinStepLine":7,"keywordOrig":"And ","keywordType":"Action"},{"pwStepLine":14,"gherkinStepLine":8,"keywordOrig":"Then ","keywordType":"Outcome"}]},
  {"pwTestLine":22,"pickleLine":10,"skipped":true,"tags":["@membership"],"steps":[{"pwStepLine":23,"gherkinStepLine":11,"keywordOrig":"Given ","keywordType":"Context"},{"pwStepLine":24,"gherkinStepLine":12,"keywordOrig":"When ","keywordType":"Action"},{"pwStepLine":25,"gherkinStepLine":13,"keywordOrig":"And ","keywordType":"Action"},{"pwStepLine":26,"gherkinStepLine":14,"keywordOrig":"Then ","keywordType":"Outcome"}]},
  {"pwTestLine":34,"pickleLine":16,"skipped":true,"tags":["@membership"],"steps":[{"pwStepLine":35,"gherkinStepLine":17,"keywordOrig":"Given ","keywordType":"Context"},{"pwStepLine":36,"gherkinStepLine":18,"keywordOrig":"When ","keywordType":"Action"},{"pwStepLine":37,"gherkinStepLine":19,"keywordOrig":"And ","keywordType":"Action"},{"pwStepLine":38,"gherkinStepLine":20,"keywordOrig":"Then ","keywordType":"Outcome"}]},
]; // bdd-data-end