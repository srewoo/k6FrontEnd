import { sleep } from 'k6';
import { openBrowser, closeBrowser, page } from '../util/common.js';
import { stagingMTURL, stagingCallAIURL } from './../k6.config.js';

// Login To Mindtickle LS
export async function openLoginMT() {
  openBrowser();
  try {
    await page.goto(`${stagingMTURL}`);
    sleep(3);
  } finally {
    closeBrowser();
  }
}

// Login to Call AI
export async function openLoginCallAI() {
  openBrowser();

  try {
    await page.goto(`${stagingCallAIURL}`);
    sleep(3);

    // Get the page load time
    const loadTime = await page.getPageLoadTime();

    // Log the load time
    console.log(`Load time for ${stagingCallAIURL}: ${loadTime} ms`);
  } finally {
    closeBrowser();
  }
}
