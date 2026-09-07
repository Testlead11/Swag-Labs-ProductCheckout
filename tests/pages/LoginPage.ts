import {Page, Locator} from "@playwright/test";
import { Commonutils } from "../Utils/Commonutils";
import  config  from "../../Config/config.json";
export class LoginPage{
 username:Locator;
 password:Locator;
 Login:Locator;
 page:Page;
        
 constructor(page:Page){
    this.page=page;
   this.username = page.getByPlaceholder("Username");
   this.password = page.getByPlaceholder("Password");
this. Login = page.locator("//input[@id='login-button']");
}

async login(){
    await Commonutils.entervalue(this.username,config.username);
    await Commonutils.entervalue(this.password,config.password);
    await Commonutils.clickOnElement(this.Login);
}
}