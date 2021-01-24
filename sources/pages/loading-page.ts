import { browser, by, element, protractor} from "protractor";
let EC = protractor.ExpectedConditions;


export class LoadingPage {

    elements = {
        geolinkButton: by.css(".geolink__reg"),
        inputBox: by.css("#city__front-input"),
        selectButton: by.css('.b-autocomplete-item__reg'),
        moreButton: by.css("[data-statlog='services_new.more']"),
        content: by.css(".services-new__more-popup-content")         
    };

    static async clickOnGeolinkButton() {
        const geolinkButton = element(by.css(".geolink__reg"));
        await browser.wait(EC.urlContains('yandex'), 10000);
        await geolinkButton.click();         
    }

    
    static async moreButton() {
        const moreButton = element(by.css("[data-statlog='services_new.more']"));
        await browser.wait(EC.presenceOf(moreButton), 10000);         
        await moreButton.click();
        
    }
}