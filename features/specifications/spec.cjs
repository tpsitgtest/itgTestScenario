import * as protractor from 'protractor'
import * as amazonHomepagePage from '../../PageObjects/HomePage/amazonHomepage.page'
var { setDefaultTimeout } = require('cucumber')
setDefaultTimeout(10 * 1000);

var firstNumber = protractor.element(protractor.by.model('first'));
var secondNumber = protractor.element(protractor.by.model('second'));
var doOperation = protractor.element(protractor.by.css('#gobutton'));
var actualResult = protractor.element(protractor.by.binding('latest'));
var ec = protractor.ExpectedConditions;



Given('I open amazon in a browser', function () {
    // ensure 
    return amazonHomepagePage.HomePage.visitAmazon;
});

When('I enter User name and Password', function (int, int2) {
    await ec.visibilityOf(amazonHomepagePage.HomePage.signInButton)
    return amazonHomepagePage.HomePage.signInButton.click();
});


Then('user has logged in', async function () {
    console.log('hello world')
    protractor.browser.sleep(4000);
    return await expect(actualResult.getText()).to.eventually.equal('7');;

});

Then('result should be correct {int}', async function (int) {
    return await expect(actualResult.getText()).to.eventually.equal(int.toString());

});