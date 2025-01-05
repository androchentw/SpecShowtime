// Generated from: spec/features/sample-pwbdd.feature
import { test } from "playwright-bdd";

test.describe('Playwright site', () => {

  test('Check title', async ({ Given, page, When, Then }) => { 
    await Given('I open url "https://playwright.dev"', null, { page }); 
    await When('I click link "Get started"', null, { page }); 
    await Then('I see in title "Playwright"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('spec/features/sample-pwbdd.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordOrig":"Given ","keywordType":"Context","stepMatchArguments":[{"group":{"start":11,"value":"\"https://playwright.dev\"","children":[{"start":12,"value":"https://playwright.dev","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordOrig":"When ","keywordType":"Action","stepMatchArguments":[{"group":{"start":13,"value":"\"Get started\"","children":[{"start":14,"value":"Get started","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordOrig":"Then ","keywordType":"Outcome","stepMatchArguments":[{"group":{"start":15,"value":"\"Playwright\"","children":[{"start":16,"value":"Playwright","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end