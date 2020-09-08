import {ExpectedConditions} from 'protractor';
var ec = ExpectedConditions;

export class KeyAction {
  sendKey(sendToElement, Input) {
    await (ec.visibilityOf(sendToElement)).toBeTrythy();
    return sendToElement.sendKey(Input);
  }
}