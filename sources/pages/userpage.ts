import { browser, element, by, protractor} from 'protractor';
      const EC = protractor.ExpectedConditions; 
      import {waiters} from '../pages/waiters';          
      import { Allure } from "../pages/allureSteps"; 

export class UserPageObject {

  AvatarButton = element(by.css(".user-account__pic .user-pic__image"));
  LogOutButton = element(by.css("a.legouser__menu-item_action_exit"));
  UserName = element(by.css(".user-account_left-name span.user-account__name"));

    async ClickOnAvatarButton(): Promise<void> {
      await Allure.allureStep ("ClickOnAvatarButton", async () => {
      await waiters.waitAndClick(this.AvatarButton);
      });
    }

    async ClickLogOutButton (): Promise<void> {
      await Allure.allureStep ("ClickLogOutButton", async () => {
      await waiters.waitAndClick(this.LogOutButton);
      });
    }

    async CheckUsername(): Promise<void> {
      await Allure.allureStep ("CheckUsername", async () => {
      await browser.wait(EC.presenceOf(this.UserName), 10000);
      expect(this.UserName.isDisplayed());
      });
    }  

}

export const UserPage =new UserPageObject;