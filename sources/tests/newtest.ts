import { browser, by, element, protractor } from "protractor";
import { GeoPage } from "../pages/geo-page";
import { LoadingPage } from "../pages/loading-page";

beforeAll (() =>      {
    browser.waitForAngularEnabled(false);
})

describe ('Search', () => {
        

    it('Change Yandex location', async () => {
        await browser.get('https://www.yandex.by/');
        await LoadingPage.clickOnGeolinkButton();
        await GeoPage.clearInputBox();
        await GeoPage.inputBox().sendKeys("Лондон");   
        await GeoPage.getSelectButton();
        await LoadingPage.moreButton();
        let contentLondon = element.all(by.css(".services-new__more-popup-content"));
        await LoadingPage.clickOnGeolinkButton();
        await GeoPage.clearInputBox();
        await GeoPage.inputBox().sendKeys("Париж");   
        await GeoPage.getSelectButton();
        await LoadingPage.moreButton();
        let contentParis = element.all(by.css(".services-new__more-popup-content")); 
        expect(contentParis.getText()).toEqual(contentLondon.getText());                
        afterAll (() => {
        browser.close
        })

    });
});