import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { ExpectedConditions } from 'protractor';
import { AmazonHome } from '../../PageObjects/HomePage';
import { MouseAction } from '../../PageObjects/Browser Interactions/MouseInputs';
import { KeyAction } from '../../PageObjects/Browser Interactions/KeyboardInteractions';

var page = new AmazonHome();
var ma = new MouseAction();
var ka =new KeyAction();
var ec = ExpectedConditions;
var emailAddress = 'tps-itg-test@dontrackme.com';
var amazonPassword = 'fl8eTklsskuE';

Feature(/^Amazon Test$/, async () => {
  Scenario(/^Login into Amazon$/, async () => {
    // place holder if needing before like from beforeAll/beforeEach from normal protractor
    Before(() => {
    });
    // go to amazon
    Given(/^I open amazon in a browser$/, async () => {
      await page.navigateToAmazon();
    });
    // click sign in
    When(/^I click sign in button$/, () => {
      await ma.visibleThenClick(page.signInButton());
    });

    And(/^enter Email address$/, () => {
      await ka.sendKey(emailAddress);
    });

    And(/^I click continue$/, () => {
      await ma.visibleThenClick(page.signInButton());
    });
    
    And(/^And I enter Password$/, () => {
      await ma.visibleThenClick(page.signInButton());
    });

    And(/^Press next$/, () => {
      await ma.visibleThenClick(page.signInButton());
    });
    
    Then(/^I should see the title$/, async () => {
      expect(ec.visibilityOf(await page.getAmazonTitleText())).toBeTruthy();
    });
  });
})
