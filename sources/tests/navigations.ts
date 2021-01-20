import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";

let addHomePage = new HomePage ();

      
describe('YandexNavigation', () => {
    it('YandexNavigation', async () => {
        
        const EC = protractor.ExpectedConditions;
        
      await browser.get(browser.baseUrl); 
      await addHomePage.ClickOnVideoButton ();
      await  browser.getAllWindowHandles().then(function(handles) {
        let newWindowHandle = handles[1]; 
        browser.switchTo().window(newWindowHandle)     });
      await browser.wait(EC.urlContains('video'), 5000);
      await browser.get(browser.baseUrl);
      await addHomePage.ClickOnImagesButton ();
      await  browser.getAllWindowHandles().then(function(handles) {
        let newWindowHandle = handles[2]; 
        browser.switchTo().window(newWindowHandle)     });
      await browser.wait(EC.urlContains('images'), 5000);
      await browser.get(browser.baseUrl);
      await addHomePage.ClickOnNewsButton ();
      await  browser.getAllWindowHandles().then(function(handles) {
        let newWindowHandle = handles[3]; 
        browser.switchTo().window(newWindowHandle)     });
      await browser.wait(EC.urlContains('news'), 5000);
      await browser.get(browser.baseUrl);
      await addHomePage.ClickOnMapsButton ();
      await  browser.getAllWindowHandles().then(function(handles) {
        let newWindowHandle = handles[4]; 
        browser.switchTo().window(newWindowHandle)     });
      await browser.wait(EC.urlContains('maps'), 5000);
      await browser.get(browser.baseUrl);
      await addHomePage.ClickOnMarketButton ();
      await  browser.getAllWindowHandles().then(function(handles) {
        let newWindowHandle = handles[5]; 
        browser.switchTo().window(newWindowHandle)     });
      await browser.wait(EC.urlContains('market'), 5000);
      await browser.get(browser.baseUrl);
      await addHomePage.ClickOnTranslateButton ();
      await  browser.getAllWindowHandles().then(function(handles) {
        let newWindowHandle = handles[6]; 
        browser.switchTo().window(newWindowHandle)     });
      await browser.wait(EC.urlContains('translate'), 5000);
      await browser.get(browser.baseUrl);
      await addHomePage.ClickOnTvButton ();
      await  browser.getAllWindowHandles().then(function(handles) {
        let newWindowHandle = handles[7]; 
        browser.switchTo().window(newWindowHandle)     });
      await browser.wait(EC.urlContains('tv'), 5000);
      await browser.get(browser.baseUrl);
      await addHomePage.ClickOnMusicButton ();
      await  browser.getAllWindowHandles().then(function(handles) {
        let newWindowHandle = handles[8]; 
        browser.switchTo().window(newWindowHandle)     });
      await browser.wait(EC.urlContains('music'), 5000);
      await browser.get(browser.baseUrl);
      await addHomePage.ClickOnTvonlineButton ();
      await  browser.getAllWindowHandles().then(function(handles) {
        let newWindowHandle = handles[9]; 
        browser.switchTo().window(newWindowHandle)     });
      await browser.wait(EC.urlContains('efir'), 5000);             
      
      afterAll (() =>      {
      browser.close
       })

    });

});