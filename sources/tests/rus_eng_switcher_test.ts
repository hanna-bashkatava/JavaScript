import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import { LanguagePage } from "../pages/switch_language_page";


      
describe('LanguageSwitcher', () => {
    it('LanguageSwitcher', async () => {
                
      await browser.get(browser.baseUrl);     
      await HomePage.ClickOnLanguageButton ();
      await HomePage.ClickOnMoreLanguageButton ();
      await LanguagePage.ClickOnArrowButton ();
      await LanguagePage.ClickOnUkraineButton ();
      await LanguagePage.ClickOnSaveButton ();
      await HomePage.checkUkrLang ();    
      await expect(await HomePage.checkUkrLang()).toEqual("Ukr"); 
    })
      

      afterAll (() =>      {
        browser.close
    })
         
});