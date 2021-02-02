import { browser, element, by, protractor} from 'protractor';
      const EC = protractor.ExpectedConditions;
import {waiters} from '../pages/waiters'; 
import { Allure } from "../pages/allureSteps";

export class LoginPageObject {

     LoginField = element(by.css("#passp-field-login"));
     SubmitButton = element(by.css("[type=submit]"));
     PassField = element(by.css("#passp-field-passwd"));
     ErrorMessage = element(by.css(".Textinput-Hint_state_error"));
     UserName = element(by.css(".user-account_left-name span.user-account__name"));

  
  async inputInLoginField(): Promise<void> {
    await Allure.allureStep ("inputInLoginField", async () => {
    await browser.wait(EC.presenceOf(this.LoginField), 10000);
    await this.LoginField.sendKeys("AutotestLogin");
    });
  }


  async ClickOnSubmitButton(): Promise<void> {
    await Allure.allureStep ("ClickOnSubmitButton", async () => {
    await waiters.waitAndClick(this.SubmitButton);
    });
  }

  async inputInPassField(): Promise<void> {
    await Allure.allureStep ("inputInPassField", async () => {
    await browser.wait(EC.presenceOf(this.PassField), 10000);
    await this.PassField.sendKeys("autotestPassword123");
    });
  }

  async FailinputInPassField(): Promise<void> {
    await Allure.allureStep ("FailinputInPassField", async () => {
    await browser.wait(EC.presenceOf(this.PassField), 10000);
    await this.PassField.sendKeys("NoAutotestPassword");
    });
  }

  async FailinputInLoginField(): Promise<void> {
    await Allure.allureStep ("FailinputInLoginField", async () => {
    await browser.wait(EC.presenceOf(this.LoginField), 10000);
    await this.LoginField.sendKeys("NoAutotestUser");
    });
  }

  async CheckErrorMessage(): Promise<void> {
    await Allure.allureStep ("CheckErrorMessage", async () => {
    await browser.wait(EC.presenceOf(this.ErrorMessage), 10000);
    expect(this.ErrorMessage.isDisplayed());
    });
  }

  async CheckUsername(): Promise<void> {
    await Allure.allureStep ("CheckUsername", async () => {
    await browser.wait(EC.presenceOf(this.UserName), 10000);
    expect(this.UserName.isDisplayed());
    });
  }  

}

export const LoginPage = new LoginPageObject();