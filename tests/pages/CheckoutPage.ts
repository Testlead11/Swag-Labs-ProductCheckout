import { Locator, Page } from "@playwright/test";
import { Commonutils } from "../Utils/Commonutils";
import  Config  from "../../Config/config.json";

export class CheckoutPage{

    checkout_button:Locator;
    Firtname:Locator;
    Lastname:Locator;
    Zip_Pstalcode:Locator;
    Continue:Locator;
    Finish:Locator;
    Confirmation_msg:Locator;
    constructor(page:Page){
    this.checkout_button= page.locator("//button[@id='checkout']");
    this.Firtname=page.getByPlaceholder("First Name");
    this.Lastname=page.locator("//input[@id='last-name']");
    this.Zip_Pstalcode=page.getByPlaceholder("Zip/Postal Code");
    this.Continue=page.locator("//input[@id='continue']");
    this.Finish=page.locator("//button[@id='finish']");
    this.Confirmation_msg=page.getByText("Thank you for your order!");
    }
    async checkout(){
   await Commonutils.clickOnElement(this.checkout_button);
   await Commonutils.entervalue(this.Firtname,Config.Firstname);
   await this.Lastname.waitFor();
   await Commonutils.entervalue(this.Lastname,Config.Lastname);
  await Commonutils.entervalue(this.Zip_Pstalcode,Config.Zip_Postalcode);
  await Commonutils.clickOnElement(this.Continue);
 
    }
    async finish(){
          await Commonutils.clickOnElement(this.Finish);

    }
}