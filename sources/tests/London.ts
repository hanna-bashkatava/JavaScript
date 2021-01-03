import { browser, by, element, ElementFinder, promise, protractor} from "protractor";

beforeAll (() =>      {
    browser.waitForAngularEnabled(false);
})

describe('Search', () => {
    it('Open yandex', async () => {
        
        const EC = protractor.ExpectedConditions;

        await browser.get('https://www.yandex.by/');
        
        const geolinkButton = element(by.css(".geolink__reg"));

        await geolinkButton.click();
        await browser.wait(EC.urlContains('yandex'), 10000);

        const inputBox = element(by.css("#city__front-input"));

        await browser.wait(EC.presenceOf(inputBox), 10000);
        await inputBox.clear();
        await inputBox.sendKeys("Лондон");

        const selectButton = element(by.css('.b-autocomplete-item__reg'));

        await browser.wait(EC.presenceOf(selectButton), 10000);
        await selectButton.click();
                          
        const moreButton = element(by.css("[data-statlog='services_new.more']"));
              
        await browser.wait(EC.presenceOf(moreButton), 10000);
        await moreButton.click();
        let contentLondon = element.all(by.css(".services-new__more-popup-content"));
        await geolinkButton.click();                         
        await browser.wait(EC.presenceOf(inputBox), 10000);
        await inputBox.clear();  
        await inputBox.sendKeys("Париж");               
        await browser.wait(EC.presenceOf(selectButton), 10000);
        await selectButton.click();                      
        await browser.wait(EC.presenceOf(moreButton), 10000);       
        await moreButton.click();               
        let contentParis = element.all(by.css(".services-new__more-popup-content"));        
        expect(contentParis.getText()).toEqual(contentLondon.getText());                
        afterAll (() => {
        browser.close
        })

    });
});



