import { browser, element, by, protractor} from 'protractor';
const EC = protractor.ExpectedConditions;
import {waiters} from '../pages/waiters';
import { Allure } from "../pages/allureSteps";

export class MarketPageObject {

    SearchField = element(by.css('[id="header-search"]'));
    SearchButton = element(by.css('[type="submit"]'));
    AddToCompareButton = element.all(by.css('._1CXljk9rtd'));
    CompareButton = element(by.css('._3oDLePObQ1'));
    ProductName = element.all(by.css('._3dCGE8Y9v3'));
    ProductName3 = element(by.css('._3dCGE8Y9v3'));
    ProductInCompareName = element.all(by.css('.PzFNvA3yUm'));
    DeleteCompareButton = element(by.css('._1KU3sPkiT1'));
    DeleteCompareElement = element(by.css('[data-apiary-widget-name="@MarketNode/CompareEmpty"]'));
    ElectronicButton = element(by.css('._3z8GfB4w3a'));
    AdvertSkip = element(by.css('._1LRo65x8Fi'));
    CameraButton = element(by.css('Смартфоны'));

    async inputInSearchField(): Promise<void> {
        await Allure.allureStep ("inputInSearchField", async () => {
        await browser.wait(EC.presenceOf(this.SearchField), 10000);
        await this.SearchField.sendKeys("Note 8");
        });
    }

    async ClickOnSearchButton(): Promise<void> {
        await Allure.allureStep ("ClickOnSearchButton", async () => {
        await waiters.waitAndClick(this.SearchButton);
        });
    }
  
    async addProductToCompare (number: number): Promise<void> {
        const elementComp = this.AddToCompareButton.get(number);
        await Allure.allureStep ("addProductToCompare", async () => {
        await browser.wait(EC.presenceOf(elementComp), 10000);
        await browser.executeScript("arguments[0].click();", elementComp.getWebElement());
        });
    }

    async ClickOnCompareButton(): Promise<void> {
        await Allure.allureStep ("ClickOnCompareButton", async () => {
        await waiters.waitAndClick(this.CompareButton);
        });
    }

    async ClickOnDeleteCompareButton(): Promise<void> {
        await Allure.allureStep ("ClickOnDeleteCompareButton", async () => {
        await waiters.waitAndClick(this.DeleteCompareButton);
        });
    }

    async ClickOnElectronicButton(): Promise<void> {
        await Allure.allureStep ("ClickOnElectronicButton", async () => {
        await waiters.waitAndClick(this.ElectronicButton);
        });
    }

    async AdvertSkipClick(): Promise<void> {
        await Allure.allureStep ("AdvertSkipClick", async () => {
        await waiters.waitAndClick(this.AdvertSkip);
        });
    }

    async ClickOnCamerasButton(): Promise<void> {
        await Allure.allureStep ("ClickOnCamerasButton", async () => {
        await waiters.waitAndClick(this.CameraButton);
        });
    }

}
  
export const MarketPage = new MarketPageObject();