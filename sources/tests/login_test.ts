import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import { LoginPage } from "../pages/loginpage";
import {Tabs} from "../pages/tabs";

  
describe('YandexLogin', () => {
  it('YandexLogin', async () => {
    await browser.get(browser.baseUrl);
    await HomePage.ClickOnLoginButton ();
    await Tabs.openNewTab ();
    await LoginPage.inputInLoginField ();
    await LoginPage.ClickOnSubmitButton ();
    await LoginPage.inputInPassField ();
    await LoginPage.ClickOnSubmitButton ();
    await LoginPage.CheckUsername ();
  })
    afterAll (() =>      {
     browser.close
})
});