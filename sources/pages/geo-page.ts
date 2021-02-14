import { browser, by, element, protractor} from "protractor";
const EC = protractor.ExpectedConditions;

export class GeoPage {

    elements = {
        geolinkButton: by.css(".geolink__reg"),
        inputBox: by.css("#city__front-input"),
        selectButton: by.css('.b-autocomplete-item__reg'),
        moreButton: by.css("[data-statlog='services_new.more']"),
        content: by.css(".services-new__more-popup-content")         
    };

    static inputBox() {
        const loc = "#city__front-input";
        return element (by.css(loc));
    }
    

    static async clearInputBox() {
        await browser.wait(EC.presenceOf(GeoPage.inputBox()), 10000);
        await GeoPage.inputBox().clear();         
    }

    static async getSelectButton() {
        const selectButton = element(by.css('.b-autocomplete-item__reg'));
        await browser.wait(EC.presenceOf(selectButton), 10000);
        await selectButton.click();
    }

    
}