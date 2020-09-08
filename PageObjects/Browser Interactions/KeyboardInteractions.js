import { browser } from "protractor";
import {ExpectedConditions} from 'protractor';
var ec = ExpectedConditions;

export class KeyAction {
  sendKey(sendToElement) {
    await (ec.visibilityOf(sendToElement)).toBeTrythy();
    return sendToElement.sendKey(sendToElement);
  }
}