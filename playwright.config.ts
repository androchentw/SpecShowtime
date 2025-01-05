import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import { Status } from 'allure-js-commons';
import * as os from 'node:os';

/**
 * Read environment variables from the file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */

const testDirBdd = defineBddConfig({
  featuresRoot: './spec/features',
  outputDir: './spec/.spec-gen',
  missingSteps: 'skip-scenario'
});

export default defineConfig({
  testDir: './tests',
  // Folder for test artifacts such as screenshots, videos, traces, etc.
  outputDir: './spec/reports/test-results',
  // Each test is given 30 seconds.
  timeout: 30000,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html', { outputFolder: './spec/reports/playwright-report' }],
    [
      'allure-playwright',
      {
        resultsDir: './spec/reports/allure-results',
        detail: true,
        suiteTitle: true,
        links: {
          issue: {
            nameTemplate: 'Issue #%s',
            urlTemplate: 'https://issues.example.com/%s',
          },
          tms: {
            nameTemplate: 'TMS #%s',
            urlTemplate: 'https://tms.example.com/%s',
          },
          jira: {
            urlTemplate: (v) => `https://jira.example.com/browse/${v}`,
          },
        },
        categories: [
          {
            name: 'foo',
            messageRegex: 'bar',
            traceRegex: 'baz',
            matchedStatuses: [Status.FAILED, Status.BROKEN],
          },
        ],
        environmentInfo: {
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version,
        },
      },
    ],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'on',
    video: {
      mode: 'on',
      size: { width: 1366, height: 768 },
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      testDir: testDirBdd,
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
