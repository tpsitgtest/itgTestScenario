import { browser } from 'protractor';

export class AmazonHome {
  navigateToAmazon() {
    return browser.get(browser.baseURL);
  }

  getAmazonTitleText() {
    return element(by.cssContaintsText(`[id='nav-logo']`,'Amazon.co.uk'));
  }

  signInButton() {
    return element(by.id('nav-signin-tooltip'));
  }

  emailInputfield() {
    return element(by.id('ap_email'));
  }

  passwordInputfield() {
    return element(by.id('ap_password'));
  }

  submitButton() {
    return element(by.id('signInSubmit'));
  }

  continueButton() {
    return element(by.css(`[@id='continue']`));
  }

  searchBar() {
    return element(by.id('twotabsearchtextbox'));
  }

  itemWanted() {
      return element(by.class('a-section a-spacing-none a-spacing-top-small'));
    }
}