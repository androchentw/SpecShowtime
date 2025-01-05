import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I open the {string} homepage', async ({ page }, arg) => {
  // Step: Given I open the "Coding Challenge System" homepage
  // From: spec/features/@coding-challenge/browse-coding-challenge.feature:4:5
});

When('I select the category {string}', async ({ page }, arg) => {
  // Step: When I select the category "Algorithms"
  // From: spec/features/@coding-challenge/browse-coding-challenge.feature:5:5
});

Then('I see a list of challenges related to {string}', async ({ page }, arg) => {
  // Step: Then I see a list of challenges related to "Algorithms"
  // From: spec/features/@coding-challenge/browse-coding-challenge.feature:6:5
});

When('I select the difficulty level {string}', async ({ page }, arg) => {
  // Step: When I select the difficulty level "Beginner"
  // From: spec/features/@coding-challenge/browse-coding-challenge.feature:10:5
});

Then('I see a list of challenges with difficulty level {string}', async ({ page }, arg) => {
  // Step: Then I see a list of challenges with difficulty level "Beginner"
  // From: spec/features/@coding-challenge/browse-coding-challenge.feature:11:5
});