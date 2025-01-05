import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I open a coding challenge titled {string}', async ({}, arg: string) => {
  // Step: Given I open a coding challenge titled "Find the Longest Substring"
  // From: spec/features/@coding-challenge/run-code-in-browser.feature:4:5
});

When('I write Python code in the editor provided', async ({}) => {
  // Step: When I write Python code in the editor provided
  // From: spec/features/@coding-challenge/run-code-in-browser.feature:5:5
});

When('I click on the {string} button', async ({}, arg: string) => {
  // Step: And I click on the "Run" button
  // From: spec/features/@coding-challenge/run-code-in-browser.feature:6:5
});

Then('I see the output of my code execution displayed below the editor', async ({}) => {
  // Step: Then I see the output of my code execution displayed below the editor
  // From: spec/features/@coding-challenge/run-code-in-browser.feature:7:5
});

Given('I write invalid Python code in the editor', async ({}) => {
  // Step: Given I write invalid Python code in the editor
  // From: spec/features/@coding-challenge/run-code-in-browser.feature:10:5
});

Then('I see an error message indicating what went wrong with my code', async ({}) => {
  // Step: Then I see an error message indicating what went wrong with my code
  // From: spec/features/@coding-challenge/run-code-in-browser.feature:12:5
});
