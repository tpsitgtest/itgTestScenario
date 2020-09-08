import { browser } from "protractor";

export class AmazonHome {
  navigateToAmazon() {
    return browser.get(browser.basengUrl);
  }

  getAmazonTitleText() {
    return element(by.cssContaintsText(`[id="nav-logo"]`,'Amazon.co.uk'));
  }
}