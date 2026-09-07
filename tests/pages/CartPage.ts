import { Locator , Page} from "@playwright/test";
import { Commonutils } from "../Utils/Commonutils";

export class CartPage{
    Cart_button:Locator;
    Back_pack_incart:Locator;
    constructor(page:Page){
      
    this.Cart_button=page.locator("//a[@class='shopping_cart_link']");
    this.Back_pack_incart=page.getByText("Sauce Labs Backpack");
    }
    async cartButton(){
       await this.Cart_button.waitFor();
        await Commonutils.clickOnElement(this.Cart_button);
    }
    
}