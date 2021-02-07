import { browser, element, by, protractor} from 'protractor';
      const EC = protractor.ExpectedConditions; 
      import {waiters} from '../pages/waiters';      
      import { Allure } from "../pages/allureSteps";      
      
export class LanguagePageObject {

    ArrowButton = element(by.css(".select_theme_normal"));
    UkraineButton = element(by.xpath("//span[contains(.,'Українська')]"));
    SaveButton = element(by.css(".button_theme_action"));
    
    async ClickOnArrowButton(): Promise<void> {
        await Allure.allureStep ("ClickOnArrowButton", async () => {
        await waiters.waitAndClick(this.ArrowButton);
        });
    }

    async ClickOnUkraineButton(): Promise<void> {
        await Allure.allureStep ("ClickOnUkraineButton", async () => {
        await waiters.waitAndClick(this.UkraineButton);
    });
    }

    async ClickOnSaveButton(): Promise<void> {
        await Allure.allureStep ("ClickOnSaveButton", async () => {
        await waiters.waitAndClick(this.SaveButton);
    });
    }

}    

export const LanguagePage = new LanguagePageObject;