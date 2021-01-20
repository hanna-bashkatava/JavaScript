import { browser, element, by, protractor} from 'protractor';
      const EC = protractor.ExpectedConditions;       
            
                  
export class HomePage {

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
        
    async ClickOnLoginButton(): Promise<void> {
        await browser.wait(EC.presenceOf(this.LoginButton), 10000);
        await this.LoginButton.click();
      }

    async ClickOnVideoButton(): Promise<void> {
        await browser.wait(EC.presenceOf(this.VideoButton), 10000);
        await this.VideoButton.click();
    }

    async ClickOnImagesButton(): Promise<void> {
        await browser.wait(EC.presenceOf(this.ImagesButton), 10000);
        await this.ImagesButton.click();
    }

    async ClickOnNewsButton(): Promise<void> {
        await browser.wait(EC.presenceOf(this.NewsButton), 10000);
        await this.NewsButton.click();
    }

    async ClickOnMapsButton(): Promise<void> {
        await browser.wait(EC.presenceOf(this.MapsButton), 10000);
        await this.MapsButton.click();
    }

    async ClickOnMarketButton(): Promise<void> {
        await browser.wait(EC.presenceOf(this.MarketButton), 10000);
        await this.MarketButton.click();
    }

    
    async ClickOnTranslateButton(): Promise<void> {
        await browser.wait(EC.presenceOf(this.TranslateButton), 10000);
        await this.TranslateButton.click();
    }

    async ClickOnTvButton(): Promise<void> {
        await browser.wait(EC.presenceOf(this.TvButton), 10000);
        await this.TvButton.click();
    }

    async ClickOnMusicButton(): Promise<void> {
        await browser.wait(EC.presenceOf(this.MusicButton), 10000);
        await this.MusicButton.click();
    }

    async ClickOnTvonlineButton(): Promise<void> {
        await browser.wait(EC.presenceOf(this.TvonlineButton), 10000);
        await this.TvonlineButton.click();
    }

    async ClickOnMoreButton(): Promise<void> {
        await browser.wait(EC.presenceOf(this.MoreButton), 10000);
        await this.MoreButton.click();
    }

    async ClickOnLanguageButton() : Promise<void>{
        await browser.wait(EC.presenceOf(this.LanguageButton), 10000);
        await this.LanguageButton.click();
    }

    async ClickOnMoreLanguageButton(): Promise<void> {
        await browser.wait(EC.presenceOf(this.MoreLanguageButton), 10000);
        await this.MoreLanguageButton.click();
    }

      
    }