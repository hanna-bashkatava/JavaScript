import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import { MarketPage } from "../pages/marketpage";
import { Tabs} from "../pages/tabs";
import { GeoPage } from "../pages/geolinkpage";
const EC = protractor.ExpectedConditions;

describe('Yandex sort by price', () => {
    it('Yandex sort by price', async () => {
     await browser.get(browser.baseUrl);
     await GeoPage.ClickOnGeoLinkButton ();
     await GeoPage.inputInGeoFieldMoscow ();
     await GeoPage.ClickOnSelectButton ();
     await HomePage.ClickOnMarketButton ();
     await Tabs.openNewTab ();
     await MarketPage. AdvertSkipClick();
     await MarketPage.ClickOnElectronicButton ();
     await MarketPage.ClickOnCamerasButton ();
    })
      
    afterAll (() =>      {
      browser.close     
    })
                
});