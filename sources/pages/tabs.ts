import { browser, element, by, protractor} from 'protractor';
import { Allure } from "../pages/allureSteps";

export class TabsObject {

  async openNewTab (): Promise<void> {
    await Allure.allureStep ("openNewTab", async () => {
    const handles = await browser.getAllWindowHandles();
    const newWindowHandle = handles[handles.length -1];
    browser.switchTo().window(newWindowHandle)
    });
  
  }  
  
  async goBackToPreviousTab(): Promise<void> {
    await Allure.allureStep ("goBackToPreviousTab", async () => {
    browser.getAllWindowHandles().then((handles) => {
    browser.driver.switchTo().window(handles[1]);
    browser.driver.close();
    browser.driver.switchTo().window(handles[0]);
    });
    });
  } 

}
  
export const Tabs = new TabsObject();



