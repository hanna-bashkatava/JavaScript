declare const allure: any;
import { browser} from "protractor";

export class  AllureObject {
async allureStep(stepDefinition: string, method: any): Promise<void> {
    await allure.createStep(stepDefinition, async () => {
        try {
            await method();
        } catch (error) {
          await   browser.takeScreenshot().then(function (png) {
            allure.createAttachment('Screenshot', function () {
              return new Buffer(png, 'base64')
            }, 'image/png')(); })
            throw error;
        }
    })();
  }
    }
    export const Allure = new AllureObject();