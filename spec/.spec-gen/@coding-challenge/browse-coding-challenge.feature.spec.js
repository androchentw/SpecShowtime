// Generated from: spec/features/@coding-challenge/browse-coding-challenge.feature
import { test } from "playwright-bdd";

test.describe('Browse Coding Challenges', () => {

  test('Filter challenges by category', { tag: ['@coding-challenge'] }, async ({ Given, page, When, Then }) => { 
    await Given('I open the "Coding Challenge System" homepage', null, { page }); 
    await When('I select the category "Algorithms"', null, { page }); 
    await Then('I see a list of challenges related to "Algorithms"', null, { page }); 
  });

  test('Filter challenges by difficulty level', { tag: ['@coding-challenge'] }, async ({ Given, page, When, Then }) => { 
    await Given('I open the "Coding Challenge System" homepage', null, { page }); 
    await When('I select the difficulty level "Beginner"', null, { page }); 
    await Then('I see a list of challenges with difficulty level "Beginner"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('spec/features/@coding-challenge/browse-coding-challenge.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":["@coding-challenge"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordOrig":"Given ","keywordType":"Context","stepMatchArguments":[{"group":{"start":11,"value":"\"Coding Challenge System\"","children":[{"start":12,"value":"Coding Challenge System","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordOrig":"When ","keywordType":"Action","stepMatchArguments":[{"group":{"start":22,"value":"\"Algorithms\"","children":[{"start":23,"value":"Algorithms","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordOrig":"Then ","keywordType":"Outcome","stepMatchArguments":[{"group":{"start":38,"value":"\"Algorithms\"","children":[{"start":39,"value":"Algorithms","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":12,"pickleLine":8,"tags":["@coding-challenge"],"steps":[{"pwStepLine":13,"gherkinStepLine":9,"keywordOrig":"Given ","keywordType":"Context","stepMatchArguments":[{"group":{"start":11,"value":"\"Coding Challenge System\"","children":[{"start":12,"value":"Coding Challenge System","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":10,"keywordOrig":"When ","keywordType":"Action","stepMatchArguments":[{"group":{"start":30,"value":"\"Beginner\"","children":[{"start":31,"value":"Beginner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":11,"keywordOrig":"Then ","keywordType":"Outcome","stepMatchArguments":[{"group":{"start":49,"value":"\"Beginner\"","children":[{"start":50,"value":"Beginner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end