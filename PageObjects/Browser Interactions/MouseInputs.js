import { browser } from "protractor";
import {ExpectedConditions} from 'protractor';
var ec = ExpectedConditions;

export class MouseAction {
  visibleThenClick(clickElement) {
    await (ec.visibilityOf(clickElement)).toBeTrythy();
    return clickElement.click();
  }
}