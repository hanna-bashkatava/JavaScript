import { browser, element, by, protractor} from 'protractor';
      const EC = protractor.ExpectedConditions;       
            
      
export class LanguagePage {

    ArrowButton = element(by.css(".select_theme_normal"));
    UkraineButton = element(by.xpath("//span[contains(.,'Українська')]"));
    SaveButton = element(by.css(".button_theme_action"));
    
    async ClickOnArrowButton(): Promise<void> {
        await browser.wait(EC.presenceOf(this.ArrowButton), 10000);
        await this.ArrowButton.click();
    }

    async ClickOnUkraineButton(): Promise<void> {
        await browser.wait(EC.presenceOf(this.UkraineButton), 10000);
        await this.UkraineButton.click();
    }

    async ClickOnSaveButton(): Promise<void> {
        await browser.wait(EC.presenceOf(this.SaveButton), 10000);
        await this.SaveButton.click();
    }
    

}    