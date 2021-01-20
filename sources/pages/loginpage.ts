import { browser, element, by, protractor} from 'protractor';
      const EC = protractor.ExpectedConditions;
      

export class LoginPage {

     LoginField = element(by.css("#passp-field-login"));
     SubmitButton = element(by.css("[type=submit]"));
     PassField = element(by.css("#passp-field-passwd"));

  
  async inputInLoginField(): Promise<void> {
    await browser.wait(EC.presenceOf(this.LoginField), 10000);
    await this.LoginField.sendKeys("AutotestLogin");
}


  async ClickOnSubmitButton(): Promise<void> {
    await browser.wait(EC.presenceOf(this.SubmitButton), 10000);
    await this.SubmitButton.click();
}

  async inputInPassField(): Promise<void> {
    await browser.wait(EC.presenceOf(this.PassField), 10000);
    await this.PassField.sendKeys("autotestPassword123");
}

  async FailinputInPassField(): Promise<void> {
    await browser.wait(EC.presenceOf(this.PassField), 10000);
    await this.PassField.sendKeys("NoAutotestPassword");
}

  async FailinputInLoginField(): Promise<void> {
  await browser.wait(EC.presenceOf(this.LoginField), 10000);
  await this.LoginField.sendKeys("NoAutotestUser");
}

}
