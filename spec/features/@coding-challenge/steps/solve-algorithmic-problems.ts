import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

When('I navigate to the {string} category', async ({}, arg: string) => {
  // Step: When I navigate to the "Algorithms" category
  // From: spec/features/@coding-challenge/solve-algorithmic-problems.feature:5:5
});

Then('I see a list of Python-based algorithm challenges', async ({}) => {
  // Step: Then I see a list of Python-based algorithm challenges
  // From: spec/features/@coding-challenge/solve-algorithmic-problems.feature:6:5
});

Given('I am on the {string} category page', async ({}, arg: string) => {
  // Step: Given I am on the "Algorithms" category page
  // From: spec/features/@coding-challenge/solve-algorithmic-problems.feature:9:5
});

When('I click on the challenge titled {string}', async ({}, arg: string) => {
  // Step: When I click on the challenge titled "Find the Longest Substring"
  // From: spec/features/@coding-challenge/solve-algorithmic-problems.feature:10:5
});
