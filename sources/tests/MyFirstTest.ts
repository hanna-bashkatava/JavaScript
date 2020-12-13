import { browser, by, element, protractor } from "protractor";

describe('Search', () => {
    it('Open google and find a text', async () => {
        
        let EC = protractor.ExpectedConditions;

        
        await browser.waitForAngularEnabled(false);

        
        await browser.get('https://www.google.com/');
        
        
        let input_button = element(by.css("input[role='combobox']"));

        
        await browser.wait(EC.presenceOf(input_button), 10000);

        
        await input_button.sendKeys("yandex",protractor.Key.ENTER);

       
        await browser.wait(EC.urlContains('yandex'), 10000);
    });
});