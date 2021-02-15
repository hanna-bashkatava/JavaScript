import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import {Tabs} from "../pages/tabs";

const EC = protractor.ExpectedConditions;

describe('YandexNavigation', () => {
    it('YandexNavigation', async () => {
                            
      await browser.get(browser.baseUrl); 
      await HomePage.ClickOnVideoButton ();
      await Tabs.openNewTab ();
      await browser.wait(EC.urlContains('video'), 5000);
      
      await browser.get(browser.baseUrl);
      await HomePage.ClickOnImagesButton ();
      await Tabs.openNewTab ();
      await browser.wait(EC.urlContains('images'), 5000);
     
      await browser.get(browser.baseUrl);
      await HomePage.ClickOnNewsButton ();
      await Tabs.openNewTab ();
      await browser.wait(EC.urlContains('news'), 5000);

      await browser.get(browser.baseUrl);
      await HomePage.ClickOnMapsButton ();
      await Tabs.openNewTab ();
      await browser.wait(EC.urlContains('maps'), 5000);

      await browser.get(browser.baseUrl);
      await HomePage.ClickOnMarketButton ();
      await Tabs.openNewTab ();
      await browser.wait(EC.urlContains('market'), 5000);

      await browser.get(browser.baseUrl);
      await HomePage.ClickOnTranslateButton ();
      await Tabs.openNewTab ();
      await browser.wait(EC.urlContains('translate'), 5000);

      await browser.get(browser.baseUrl);
      await HomePage.ClickOnTvButton ();
      await Tabs.openNewTab ();
      await browser.wait(EC.urlContains('tv'), 5000);
      
      // await browser.get(browser.baseUrl);
      // await HomePage.ClickOnMusicButton ();
      // await Tabs.openNewTab ();
      // await browser.wait(EC.urlContains('music'), 5000);

      await browser.get(browser.baseUrl);
      await HomePage.ClickOnTvonlineButton ();
      await Tabs.openNewTab ();                
      await browser.wait(EC.urlContains('efir'), 5000);

      afterAll (() =>      {
      browser.close
       })

    });

});