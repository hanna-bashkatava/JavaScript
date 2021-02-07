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

}
  
export const Tabs = new TabsObject();



