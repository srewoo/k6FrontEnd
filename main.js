//Imprort Scenario functions
import { openLoginCallAI, openLoginMT } from "./scenario/login.js";
import { callListPage } from "./scenario/callListPage.js";
import { callDetailsPage } from "./scenario/callDetailsPage.js";
import { group } from "k6";
import { getOptions } from "./k6.config.js";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

//Export load paremeters from config file
export let options = getOptions;

//Run main test case
export default function () {
  //group("Login To Call AI", () => openLoginCallAI());
  //group("Login Mindtickle", () => openLoginMT());
  group("Go to Call List Page", () => callListPage());
  //group("Go to Call Details Page", () => callDetailsPage());
}

//Generate html reporter
export function handleSummary(data) {
  const timestamp = new Date().toISOString().replace(/[-:]/g, "");
  const reportFilename = `report_${timestamp}.html`;
  const fileLocation = `reports/${reportFilename}`;
  return {
    [fileLocation]: htmlReport(data),
  };
}
