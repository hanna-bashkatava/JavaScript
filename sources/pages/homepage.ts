import { browser, element, by, protractor} from 'protractor';
      const EC = protractor.ExpectedConditions; 
import { Allure } from "../pages/allureSteps";
import {waiters} from '../pages/waiters';    

declare let allure: any;
            
                  
export class HomePageObject {

    LoginButton = element(by.css("[data-statlog='notifications.mail.logout.domik.login.big']"));
    VideoButton = element(by.css("[data-id='video']"));
    ImagesButton = element(by.css("[data-id='images']"));
    NewsButton = element(by.css("[data-id='news']"));
    MapsButton = element(by.css("[data-id='maps']"));
    MarketButton = element(by.css("[data-id='market']"));
    TranslateButton = element(by.css("[data-id='translate']"));
    TvButton = element(by.css("[data-id='tv']"));
    MusicButton = element(by.css("[data-id='music']"));
    TvonlineButton = element(by.css("[data-id='tvonline']"));
    MoreButton = element(by.css("[data-statlog='services_new.more']"));
    LanguageButton = element(by.css(".b-langs"));
    MoreLanguageButton = element(by.css("[data-statlog='head.lang.more']"));
    UkrLang = element(by.xpath("//a[contains(.,'Ukr')]"));
        
    async ClickOnLoginButton(): Promise<void> {
        await Allure.allureStep ("ClickOnLoginButton", async () => {
        await waiters.waitAndClick(this.LoginButton);
        });
    }
    async ClickOnVideoButton(): Promise<void> {
        await Allure.allureStep ("ClickOnVideoButton", async () => {
        await waiters.waitAndClick(this.VideoButton);
        });
    }
    async ClickOnImagesButton(): Promise<void> {
        await Allure.allureStep ("ClickOnImagesButton", async () => {
        await waiters.waitAndClick(this.ImagesButton);
        });
    }

    async ClickOnNewsButton(): Promise<void> {
        await Allure.allureStep ("ClickOnNewsButton", async () => {
        await waiters.waitAndClick(this.NewsButton);
        });
    }

    async ClickOnMapsButton(): Promise<void> {
        await Allure.allureStep ("ClickOnMapsButton", async () => {
        await waiters.waitAndClick(this.MapsButton);
        });
    }
    async ClickOnMarketButton(): Promise<void> {
        await Allure.allureStep ("ClickOnMarketButton", async () => {
        await waiters.waitAndClick(this.MarketButton);
        });
    }
    
    async ClickOnTranslateButton(): Promise<void> {
        await Allure.allureStep ("ClickOnTranslateButton", async () => {
        await waiters.waitAndClick(this.TranslateButton);
        });
    }

    async ClickOnTvButton(): Promise<void> {
        await Allure.allureStep ("ClickOnTvButton", async () => {
        await waiters.waitAndClick(this.TvButton);
        });
    }

    async ClickOnMusicButton(): Promise<void> {
        await Allure.allureStep ("ClickOnMusicButton", async () => {
        await waiters.waitAndClick(this.MusicButton);
        });
    }

    async ClickOnTvonlineButton(): Promise<void> {
        await Allure.allureStep ("ClickOnTvonlineButton", async () => {
        await waiters.waitAndClick(this.TvonlineButton);
        });
    }

    async ClickOnMoreButton(): Promise<void> {
        await Allure.allureStep ("ClickOnMoreButton", async () => {
        await waiters.waitAndClick(this.MoreButton);
        });
    }

    async ClickOnLanguageButton() : Promise<void>{
        await Allure.allureStep ("ClickOnLanguageButton", async () => {
        await waiters.waitAndClick(this.LanguageButton);
        });
    }

    async ClickOnMoreLanguageButton(): Promise<void> {
        await Allure.allureStep ("ClickOnMoreLanguageButton", async () => {
        await waiters.waitAndClick(this.MoreLanguageButton);
        });
    }

    async CheckLogOut(): Promise<void> {
        await Allure.allureStep ("CheckLogOut", async () => {
        expect(await browser.getCurrentUrl()).toContain("https://passport.yandex.by/"); 
        });
    }
    
    async checkUkrLang (): Promise <string> {
        await Allure.allureStep ("checkUkrLang", async () => {
        await browser.wait(EC.presenceOf(this.UkrLang), 10000);
      });
        return this.UkrLang.getText();
      
      }
      
}

export const HomePage = new HomePageObject();

    