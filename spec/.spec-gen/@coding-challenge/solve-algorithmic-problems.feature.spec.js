// Generated from: spec/features/@coding-challenge/solve-algorithmic-problems.feature
import { test } from "playwright-bdd";

test.describe('Solve Algorithmic Problems', () => {

  test('Access Python-based algorithm challenges', { tag: ['@coding-challenge'] }, async ({ Given, page, When, Then }) => { 
    await Given('I open the "Coding Challenge System" homepage', null, { page }); 
    await When('I navigate to the "Algorithms" category'); 
    await Then('I see a list of Python-based algorithm challenges'); 
  });

  test('Open a specific algorithm challenge', { tag: ['@coding-challenge'] }, async ({ Given, When, Then }) => { 
    await Given('I am on the "Algorithms" category page'); 
    await When('I click on the challenge titled "Find the Longest Substring"'); 
    await Then('I see the challenge details, including problem description and input/output examples'); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('spec/features/@coding-challenge/solve-algorithmic-problems.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":["@coding-challenge"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordOrig":"Given ","keywordType":"Context","stepMatchArguments":[{"group":{"start":11,"value":"\"Coding Challenge System\"","children":[{"start":12,"value":"Coding Challenge System","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordOrig":"When ","keywordType":"Action","stepMatchArguments":[{"group":{"start":18,"value":"\"Algorithms\"","children":[{"start":19,"value":"Algorithms","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordOrig":"Then ","keywordType":"Outcome","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":8,"tags":["@coding-challenge"],"steps":[{"pwStepLine":13,"gherkinStepLine":9,"keywordOrig":"Given ","keywordType":"Context","stepMatchArguments":[{"group":{"start":12,"value":"\"Algorithms\"","children":[{"start":13,"value":"Algorithms","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":10,"keywordOrig":"When ","keywordType":"Action","stepMatchArguments":[{"group":{"start":32,"value":"\"Find the Longest Substring\"","children":[{"start":33,"value":"Find the Longest Substring","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":11,"keywordOrig":"Then ","keywordType":"Outcome","stepMatchArguments":[]}]},
]; // bdd-data-end