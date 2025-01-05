// Generated from: spec/features/@coding-challenge/validate-challenge-solutions.feature
import { test } from "playwright-bdd";

test.describe('Validate Challenge Solutions', () => {

  test('Submit a correct solution for validation', { tag: ['@coding-challenge'] }, async ({ Given, When, Then }) => { 
    await Given('I have written a correct solution for a coding challenge'); 
    await When('I click on the "Submit" button'); 
    await Then('I see a message saying "Your solution is correct!"'); 
  });

  test('Submit an incorrect solution for validation', { tag: ['@coding-challenge'] }, async ({ Given, When, Then }) => { 
    await Given('I have written an incorrect solution for a coding challenge'); 
    await When('I click on the "Submit" button'); 
    await Then('I see feedback indicating which test cases failed and why'); 
  });

  test('View detailed feedback after submission', { tag: ['@coding-challenge'] }, async ({ Given, When, Then }) => { 
    await Given('my submitted solution failed some test cases'); 
    await When('I click on the "View Feedback" link'); 
    await Then('I see detailed feedback for each failed test case, including input, expected output, and actual output'); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('spec/features/@coding-challenge/validate-challenge-solutions.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":["@coding-challenge"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordOrig":"Given ","keywordType":"Context","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordOrig":"When ","keywordType":"Action","stepMatchArguments":[{"group":{"start":15,"value":"\"Submit\"","children":[{"start":16,"value":"Submit","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordOrig":"Then ","keywordType":"Outcome","stepMatchArguments":[{"group":{"start":23,"value":"\"Your solution is correct!\"","children":[{"start":24,"value":"Your solution is correct!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":12,"pickleLine":8,"tags":["@coding-challenge"],"steps":[{"pwStepLine":13,"gherkinStepLine":9,"keywordOrig":"Given ","keywordType":"Context","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordOrig":"When ","keywordType":"Action","stepMatchArguments":[{"group":{"start":15,"value":"\"Submit\"","children":[{"start":16,"value":"Submit","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":11,"keywordOrig":"Then ","keywordType":"Outcome","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":13,"tags":["@coding-challenge"],"steps":[{"pwStepLine":19,"gherkinStepLine":14,"keywordOrig":"Given ","keywordType":"Context","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":15,"keywordOrig":"When ","keywordType":"Action","stepMatchArguments":[{"group":{"start":15,"value":"\"View Feedback\"","children":[{"start":16,"value":"View Feedback","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":16,"keywordOrig":"Then ","keywordType":"Outcome","stepMatchArguments":[]}]},
]; // bdd-data-end