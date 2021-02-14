import {browser, ElementFinder, protractor} from 'protractor';
import {defaultTimeout} from './constants';
export async function waitForElementVisible(elementFinder: ElementFinder, timeout: number = defaultTimeout): Promise<void> {
	const EC = protractor.ExpectedConditions;
	await browser.wait(EC.visibilityOf(elementFinder), timeout);
}
export class Waiters {
	
	async clickElementAction(element: ElementFinder) {
		await element.click();   		    		
	}

	async waitForClickable(element: ElementFinder) {
		const EC = protractor.ExpectedConditions;
		await browser.wait(EC.elementToBeClickable(element), 5000);
	}

	async waitAndClick(element: ElementFinder): Promise<void>{
		await this.waitForClickable(element);
		await this.clickElementAction(element);
	}

	async sendTextAction(element: ElementFinder, value: string) {
		await element.clear();
		await element.sendKeys(value);
	}
}
     export const waiters = new Waiters();