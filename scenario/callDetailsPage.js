import { sleep } from "k6";
import { chromium } from "k6/experimental/browser";
import { stagingMTURL, userName, password } from "./../k6.config.js";
import { closeBrowser,page,loginCallAIApp,openCallRec,openBrowser } from './../util/common.js';
//import { callListPage }  from "./callListPage.js";


export async function callDetailsPage() {
  //openCallRec();
  
 openBrowser();

  await page.goto(`${stagingMTURL}`);
  sleep(2);
  await page.locator('input[name="username"]').type(`${userName}`);
  await page.locator('input[name="password"]').type(`${password}`);

  const submitButton = page.locator('button[name="loginButton')
  Promise.all([page.waitForNavigation(), submitButton.click()]);

  sleep(6);
  await page.evaluate(() => {
    document
      .querySelector(".icon.icon-phoneCall.learner-header-menu-item-icon")
      .click();
  });
  sleep(8);

  console.log("page name callai " + page.title());

  await page.evaluate(() => {
    document.querySelector('.placeholder-thumbnail').click();
  });
  sleep(3);

  console.log("page name callai " + page.title());
  closeBrowser();
}
