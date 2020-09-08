import { browser } from "protractor";

class HomePage {
  constructor() {
    this.header = new Header();
  }

  visitAmazon() {
    return browser.get('https://www.amazon.co.uk/');
  }

  signInButton() {
    return element(by.css(`[@id='nav-signin-tooltip']`))
  }

  getUserAvatar() {
    return cy.get(`[data-testid=UserAvatar]`);
  }

  goToSignIn() {
    const link = this.header.getSignInLink();
    link.click();

    const signIn = new SignInPage();
    return signIn;
  }
}

export default HomePage();