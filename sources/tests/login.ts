import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import { LoginPage } from "../pages/loginpage";

let addHomePage = new HomePage ();
let addLoginPage = new LoginPage ();

  
describe('YandexLogin', () => {
    it('YandexLogin', async () => {
        
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
      const UserName = element(by.css(".user-account_left-name span.user-account__name"));
      await browser.wait(EC.visibilityOf(UserName), 40000);
      await expect(await UserName.getText()).toEqual("AutotestLogin"); 
      })
      
      afterAll (() =>      {
      browser.close
       })

         });