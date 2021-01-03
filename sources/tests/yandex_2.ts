import { browser, by, element, protractor} from "protractor";

describe('Search', () => {
    it('Open yandex', async () => {
        
        let EC = protractor.ExpectedConditions;

        await browser.waitForAngularEnabled(false);

        await browser.get('https://www.yandex.by/');
        
        let input_button = element(by.css("input[role='combobox']"));

        await browser.wait(EC.presenceOf(input_button), 10000);

        input_button.isDisplayed().then(disp => { console.log("isDisplayed:", disp); })

        input_button.isEnabled().then(enab => { console.log("isEnabled:", enab); })
                          
    });
});


