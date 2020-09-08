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
// should never store creditials in plain text
var emailAddress = 'tps-itg-test@dontrackme.com';
var amazonPassword = 'fl8eTklsskuE';
var itemWantedName = 'Toblerone Tone Dark Chocolate, 0.36 kg';

Feature(/^Amazon Test$/, async () => {
  Scenario(/^Login into Amazon$/, async () => {
    // place holder if needing before like from beforeAll/beforeEach from normal protractor
    Before(() => {
    });
    // go to amazon
    Given(/^I open amazon in a browser$/, async () => {
      await page.navigateToAmazon();
    });

    When(/^I click sign in button$/, () => {
      await ma.visibleThenClick(page.signInButton());
    });

    And(/^enter Email address$/, () => {
      await ka.sendKey(page.emailInputfield, emailAddress);
    });

    And(/^I click continue$/, () => {
      await ma.visibleThenClick(page.continueButton());
    });
    
    And(/^And I enter Password$/, () => {
      await ka.sendKey(amazonPassword);
    });

    And(/^Press Submit$/, () => {
      await ma.visibleThenClick(page.submitButton());
    });
    
    Then(/^I should not see sign in modal$/, async () => {
      // if logged in should no longer be present
      expect(ec.visibilityOf(await page.signInButton())).toBeFalsy();
    });
  });
  Scenario(/^Search for Item$/, async () => {
    // place holder if needing before like from beforeAll/beforeEach from normal protractor
    Before(() => {
    });
    
    Given(/^ Search for Item$/, async () => {
      await ec.visibilityOf(await page.searchBar()).toBeTruthy();
    });

    When(/^Enter Item Name$/, () => {
      await ka.sendKey(page.searchBar, itemWantedName)
    });
    
    Then(/^expect Item to be displayedl$/, async () => {
      expect(ec.visibilityOf(await page.itemWanted())).toBeTruthy();
    });
  });
  Scenario(/^Ensure Currect value is in basket$/, async () => {
    // place holder if needing before like from beforeAll/beforeEach from normal protractor
    Before(() => {
    });

    Given(/^ Item is Displayed in results list$/, async () => {
      await ec.visibilityOf(await page.itemWanted().toContain(itemWantedName)).toBeTruthy();
    });

    When(/^I click on the item i can interact with basket$/, () => {
      await ma.visibleThenClick(page.itemWanted().toContain(itemWantedName))
    });

    and(/^Click Add to basket$/, () => {
      await ma.visibleThenClick(page.itemWanted().toContain(itemWantedName))
    });

    and(/^Click drop to set amount to add to basket$/, () => {
      await ma.visibleThenClick(page.itemWanted().toContain(itemWantedName))
    });

    and(/^select 2 in dropdown menu$/, () => {
      await ma.visibleThenClick(page.itemWanted().toContain(itemWantedName))
    });

    and(/^Click add to basket$/, () => {
      await ma.visibleThenClick(page.itemWanted().toContain(itemWantedName))
    });

    Then(/^expect Item to be displayedl$/, async () => {
      expect(ec.visibilityOf(await page.itemWanted())).toBeTruthy();
    });
  });
})
