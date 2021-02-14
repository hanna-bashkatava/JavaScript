import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import { MarketPage } from "../pages/marketpage";
import { Tabs } from "../pages/tabs";
const EC = protractor.ExpectedConditions;

describe('Yandex compare test', () => {
    it('Yandex compare test', async () => {
     await browser.get(browser.baseUrl);
     await HomePage.ClickOnMarketButton ();
     await Tabs.openNewTab ();
     await MarketPage.inputInSearchField ();
     await MarketPage.ClickOnSearchButton ();
     await browser.wait(EC.presenceOf(MarketPage.ProductName3), 10000);
     const productName1 = await MarketPage.ProductName.get(0).getText();
     const productName2 = await MarketPage.ProductName.get(1).getText();
     await MarketPage.addProductToCompare (0);
     await MarketPage.addProductToCompare (1);
     await MarketPage.ClickOnCompareButton ();
     expect(await MarketPage.ProductInCompareName.get(0).getText()).toEqual(productName1);
     expect(await MarketPage.ProductInCompareName.get(1).getText()).toEqual(productName2);
    })
    afterAll (() => {
    browser.close
    })

});