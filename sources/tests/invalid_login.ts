import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import { LoginPage } from "../pages/loginpage";

let addHomePage = new HomePage ();
let addLoginPage = new LoginPage ();

      
describe('YandexInvalidLogin', () => {
    it('YandexInvalidLogin', async () => {
        
      const EC = protractor.ExpectedConditions;

      await browser.get(browser.baseUrl);    
      await addHomePage.ClickOnLoginButton ();
      await  browser.getAllWindowHandles().then(function(handles) {
        let newWindowHandle = handles[1]; 
        browser.switchTo().window(newWindowHandle)     });
      await addLoginPage.FailinputInLoginField ();
      await addLoginPage.ClickOnSubmitButton ();
      const ErrorMessage = element(by.css(".Textinput-Hint_state_error"));
      await browser.wait(EC.presenceOf(ErrorMessage), 15000);
      ErrorMessage.isDisplayed().then(disp => { console.log("Error Message isDisplayed:", disp); })
      console.log(await ErrorMessage.getText());

      })
      
      afterAll (() =>      {
      browser.close
       })

         });
