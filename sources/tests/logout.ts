import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import { LoginPage } from "../pages/loginpage";
import { UserPage } from "../pages/userpage";

let addHomePage = new HomePage ();
let addLoginPage = new LoginPage ();
let addUserPage = new UserPage ();

     
describe('YandexLogout', () => {
    it('YandexLogout', async () => {
        
        const EC = protractor.ExpectedConditions;

      await browser.get(browser.baseUrl);     
      await addHomePage.ClickOnLoginButton ();
      await  browser.getAllWindowHandles().then(function(handles) {
        let newWindowHandle = handles[1]; 
        browser.switchTo().window(newWindowHandle)     });
      await addLoginPage.inputInLoginField ();
      await addLoginPage.ClickOnSubmitButton ();
      await addLoginPage.inputInPassField ();
      await addLoginPage.ClickOnSubmitButton ();
      await addUserPage.ClickOnAvatarButton ();
      await addUserPage.ClickLogOutButton ();
      await browser.wait(EC.urlContains('mail.yandex.by'), 10000);

      })
      
      afterAll (() =>      {
      browser.close
       })

         });