import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import { LoginPage } from "../pages/loginpage";
import {Tabs} from "../pages/tabs";
import {UserPage} from "../pages/userpage";
     
describe('YandexLogout', () => {
    it('YandexLogout', async () => {
        
      await browser.get(browser.baseUrl);     
      await HomePage.ClickOnLoginButton ();
      await Tabs.openNewTab ();
      await LoginPage.inputInLoginField ();
      await LoginPage.ClickOnSubmitButton ();
      await LoginPage.inputInPassField ();
      await LoginPage.ClickOnSubmitButton ();
      await UserPage.ClickOnAvatarButton ();
      await UserPage.ClickLogOutButton ();
      await HomePage.CheckLogOut ();
      
      
      afterAll (() =>      {
      browser.close
       
    })          
        
});

})