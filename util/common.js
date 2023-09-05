import { chromium } from "k6/experimental/browser";
import { sleep } from "k6";

import { stagingMTURL, userName, password } from "../k6.config.js";

let browser;
let page;

export function openBrowser() {
  browser = chromium.launch({
    headless: false,
    timeout: "60s",
  });
  page = browser.newPage();
}

export function closeBrowser() {
  // Close the browser instance and release resources
  if (browser) {
    browser.close();
  }
}

export async function loginCallAIApp() {
  openBrowser();

  await page.goto(`${stagingMTURL}`);
  sleep(3);
  await page.locator('input[name="username"]').type(`${userName}`);
  await page.locator('input[name="password"]').type(`${password}`);

  const submitButton = page.locator('button[name="loginButton"]');

  Promise.all([page.waitForNavigation(), submitButton.click()]);
  sleep(8);
  await page.evaluate(() => {
    document
      .querySelector(".icon.icon-phoneCall.learner-header-menu-item-icon")
      .click();
  });
  sleep(5);
}

export async function openCallRec() {
  loginCallAIApp();

  await page.evaluate(() => {
    document.querySelector(".placeholder-thumbnail").click();
  });
  sleep(3);
}

export { page };
