 import { Locator, Page } from "@playwright/test";
import { Commonutils } from "../Utils/Commonutils";


 export class ProductPage{
page:Page;
addtocart:Locator;
Product:Locator;
constructor(page:Page){
    this.page=page;
this.addtocart = page.locator("//button[@id='add-to-cart-sauce-labs-backpack']");
this.Product=page.locator("//span[@class='title']");
}
async productPage(){
    await Commonutils.clickOnElement(this.addtocart);
}
}