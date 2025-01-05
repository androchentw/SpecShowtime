// Generated from: spec/features/@coding-challenge/run-code-in-browser.feature
import { test } from "playwright-bdd";

test.describe('Run Code in Browser', () => {

  test('Execute code in a cloud-based environment', { tag: ['@coding-challenge'] }, async ({ Given, When, And, Then }) => { 
    await Given('I open a coding challenge titled "Find the Longest Substring"'); 
    await When('I write Python code in the editor provided'); 
    await And('I click on the "Run" button'); 
    await Then('I see the output of my code execution displayed below the editor'); 
  });

  test('Handle errors during code execution', { tag: ['@coding-challenge'] }, async ({ Given, When, Then }) => { 
    await Given('I write invalid Python code in the editor'); 
    await When('I click on the "Run" button'); 
    await Then('I see an error message indicating what went wrong with my code'); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('spec/features/@coding-challenge/run-code-in-browser.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":["@coding-challenge"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordOrig":"Given ","keywordType":"Context","stepMatchArguments":[{"group":{"start":33,"value":"\"Find the Longest Substring\"","children":[{"start":34,"value":"Find the Longest Substring","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordOrig":"When ","keywordType":"Action","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordOrig":"And ","keywordType":"Action","stepMatchArguments":[{"group":{"start":15,"value":"\"Run\"","children":[{"start":16,"value":"Run","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordOrig":"Then ","keywordType":"Outcome","stepMatchArguments":[]}]},
  {"pwTestLine":13,"pickleLine":9,"tags":["@coding-challenge"],"steps":[{"pwStepLine":14,"gherkinStepLine":10,"keywordOrig":"Given ","keywordType":"Context","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordOrig":"When ","keywordType":"Action","stepMatchArguments":[{"group":{"start":15,"value":"\"Run\"","children":[{"start":16,"value":"Run","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":12,"keywordOrig":"Then ","keywordType":"Outcome","stepMatchArguments":[]}]},
]; // bdd-data-end