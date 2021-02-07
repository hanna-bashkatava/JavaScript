import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import { LoginPage } from "../pages/loginpage";
import {Tabs} from "../pages/tabs";

      
describe('YandexInvalidLogin', () => {
    it('YandexInvalidLogin', async () => {
     await browser.get(browser.baseUrl);
     await HomePage.ClickOnLoginButton ();
     await Tabs.openNewTab ();
     await LoginPage.FailinputInLoginField ();
     await LoginPage.ClickOnSubmitButton ();
     await LoginPage.CheckErrorMessage ();
    })
      
    afterAll (() =>      {
    browser.close
    })

});
