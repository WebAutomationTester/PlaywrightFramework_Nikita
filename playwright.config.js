// @ts-check
import { defineConfig, devices, expect } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const Config=({
  testDir: './tests',
  timeout:50*1000,
  expect:
  {
    timeout:6000,
  },
  reporter: 'html',
 
  use: {
    browserName:'chromium',
    headless:false,
    screenshot:'on',
    trace: 'on-first-retry',
  },

 
 
});

module.exports=Config

