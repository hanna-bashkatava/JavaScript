import { browser, element, by, protractor} from 'protractor';
const EC = protractor.ExpectedConditions;
import {waiters} from '../pages/waiters';
import {Allure} from "../pages/allureSteps";

export class GeoPageObject {

    GeolinkButton = element(by.css(".geolink__reg"));
    InputField = element(by.css("#city__front-input"));
    SelectButton = element(by.css(".b-autocomplete-item__reg"));    

    async ClickOnGeoLinkButton(): Promise<void> {
       await Allure.allureStep ("ClickOnGeoLinkButton", async () => {
       await waiters.waitAndClick(this.GeolinkButton);
       });
    }

    async inputInGeoFieldLondon(): Promise<void> {
       await Allure.allureStep ("inputInGeoFieldLondon", async () => {
       await browser.wait(EC.presenceOf(this.InputField), 10000);
       await waiters.sendTextAction(this.InputField, "Лондон");
       });
    }

    async inputInGeoFieldParis(): Promise<void> {
       await Allure.allureStep ("inputInGeoFieldParis", async () => {
       await browser.wait(EC.presenceOf(this.InputField), 10000);
       await waiters.sendTextAction(this.InputField, "Париж");
       });
    }

    async inputInGeoFieldMoscow(): Promise<void> {
       await Allure.allureStep ("inputInGeoFieldParis", async () => {
       await browser.wait(EC.presenceOf(this.InputField), 10000);
       await waiters.sendTextAction(this.InputField, "Москва");
       });
    }

    async ClickOnSelectButton (): Promise<void>  {
       await Allure.allureStep ("ClickOnSelectButton", async () => {
       await waiters.waitAndClick(this.SelectButton);
       });
    }
  
}
  
  export const GeoPage = new GeoPageObject();