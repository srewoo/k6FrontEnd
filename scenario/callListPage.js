import { chromium } from "k6/experimental/browser";
import { sleep } from "k6";
import { stagingMTURL, userName, password } from "./../k6.config.js";
import { openBrowser, closeBrowser, page, loginCallAIApp } from '../util/common.js';


export async function callListPage() {
//  openBrowser();

loginCallAIApp();

  // await page.goto(`${stagingMTURL}`);
  // sleep(1);
  // await page.locator('input[name="username"]').type(`${userName}`);
  // await page.locator('input[name="password"]').type(`${password}`);

  // const submitButton = page.locator('button[name="loginButton"]');

  // Promise.all([page.waitForNavigation(), submitButton.click()]);

  // sleep(3);
  // page.evaluate(() => {
  //   document
  //     .querySelector(".icon.icon-phoneCall.learner-header-menu-item-icon")
  //     .click();
  // });
  // sleep(3);
  
  
}
closeBrowser();

