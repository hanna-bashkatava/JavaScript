import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import { LanguagePage } from "../pages/switch_language_page";

let addHomePage = new HomePage ();
let addLanguagePage = new LanguagePage ();

      
describe('LanguageSwitcher', () => {
    it('LanguageSwitcher', async () => {
        
        const EC = protractor.ExpectedConditions;

      await browser.get(browser.baseUrl);     
      await addHomePage.ClickOnLanguageButton ();
      await addHomePage.ClickOnMoreLanguageButton ();
      await browser.wait(EC.urlContains('tune'), 5000);
      await addLanguagePage.ClickOnArrowButton();
      await addLanguagePage.ClickOnUkraineButton();
      await addLanguagePage.ClickOnSaveButton();
      await browser.wait(EC.urlContains('yandex'), 5000);
      const UkrLang = element(by.css(".b-langs"));
      await browser.wait(EC.presenceOf(UkrLang), 10000);
      await expect(await UkrLang.getText()).toEqual("Ukr");
      

      afterAll (() =>      {
        browser.close
         })
  
      });
  
  });