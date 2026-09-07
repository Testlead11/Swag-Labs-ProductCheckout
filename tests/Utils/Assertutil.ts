import { expect , Locator} from "@playwright/test";
import Config from "../../Config/config.json";

export class Assertutil{
    static async assertFail(message:string){
         console.log(message);
    }
    static async verifyElementIsVisible(element:Locator):Promise<void>{
        await expect(element).toBeVisible();
    }
   // static async textIsPresent(element:Locator):Promise<void>{
    //    await expect(element).toHaveText(Config.confirmationtext);
    //}

    static async textIsPresent(element: Locator,expectedText: string): Promise<void> {

    await expect(element).toHaveText(expectedText);
}
}