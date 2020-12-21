import { browser, by, element, ElementFinder, promise, protractor} from "protractor";

describe('Search', () => {
    it('Open yandex', async () => {
        
        let EC = protractor.ExpectedConditions;

        await browser.waitForAngularEnabled(false);

        await browser.get('https://www.yandex.by/');
        
        let geolinkButton = element(by.css(".geolink__reg")).click();

        await browser.wait(EC.urlContains('yandex'), 10000);

        let inputBox = element(by.css("#city__front-input"));

        await browser.wait(EC.presenceOf(inputBox), 10000);

        await inputBox.clear();

        await inputBox.sendKeys("Лондон");

        let selectButton = element(by.css('.b-autocomplete-item__reg'));

        await browser.wait(EC.presenceOf(selectButton), 10000);

        await selectButton.click();
                          
        let moreButton = element(by.css("[data-statlog='services_new.more']"));
              
        await browser.wait(EC.presenceOf(moreButton), 10000);
       
        await moreButton.click();

        let content1 = element(by.css(".services-new__more-popup-content"));

        content1.getText().then(cont => { console.log("text:", cont); })

        let geolink_button_2 = element(by.css(".geolink__reg")).click();

        let inputBox2 = element(by.css("#city__front-input"));
                          
        await browser.wait(EC.presenceOf(inputBox2), 10000);
              
        await inputBox2.clear();

        await inputBox2.sendKeys("Париж");

        let selectButton2 = element(by.css('.b-autocomplete-item__reg'));
        
        await browser.wait(EC.presenceOf(selectButton2), 10000);

        await selectButton2.click();

        let moreButton2 = element(by.css("[data-statlog='services_new.more']"));
              
        await browser.wait(EC.presenceOf(moreButton2), 10000);
       
        await moreButton2.click();
               
        let content2 = element(by.css(".services-new__more-popup-content"));

        await browser.wait(EC.presenceOf(content2), 5000);

        await content2.getText().then(cont2 => { console.log("text2:", cont2);

        expect(content2.getText()).toEqual(content1.getText()); 
        
        })

        afterAll (() => {
        browser.close
        })

    });
});



