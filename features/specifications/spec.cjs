import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import {ExpectedConditions} from 'protractor';

import { AmazonHome } from '../../PageObjects/HomePage';

var page = new AmazonHome();
var EC = protractor.ExpectedConditions;

Before(() => {
});

Given(/^I am on the home page$/, async () => {
  await page.navigateToAmazon();
});

When(/^I do nothing$/, () => {});

Then(/^I should see the title$/, async () => {
  expect(e.isDisplayed(await page.getAmazonTitleText())).toBeTruthy();
});